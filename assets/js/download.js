var apiRoot = "https://api.github.com/";

// Return a HTTP query variable
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for(var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable) {
            return pair[1];
        }
    }
    return "";
}

// Format numbers
function formatNumber(value) {
    return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
}

// Display the stats
function showStats(data) {
    var err = false;
    var errMessage = '';

    if(data.status == 404) {
        err = true;
        errMessage = "The project does not exist!";
    }

    if(data.status == 403) {
        err = true;
        errMessage = "You've exceeded GitHub's rate limiting.<br />Please try again in about an hour.";
    }

    if(data.length == 0) {
        err = true;
        errMessage = "There are no releases for this project";
    }

    var html = "";

    if(err) {
        html += "<div class='col-md-6 col-md-offset-3 alert alert-danger output'>" + errMessage + "</div>";
    } else {
        html += "<div class='col-md-6 col-md-offset-3 output'>";

        var isLatestRelease = true;
        var totalDownloadCount = 0;
        $.each(data, function(index, item) {
            var releaseTag = item.tag_name;
            var releaseBadge = "";
            var releaseClassNames = "release";
            var releaseURL = item.html_url;
            var isPreRelease = item.prerelease;
            var releaseAssets = item.assets;
            var releaseDownloadCount = 0;
            var releaseAuthor = item.author;
            var publishDate = item.published_at.split("T")[0];
            var downloadUrl = item.assets[0].browser_download_url;
            var name = item.name;

            $('#downloadTitle').html(name);

            if(isPreRelease) {
                releaseBadge = "&nbsp;&nbsp;<span class='badge'>Pre-release</span>";
                releaseClassNames += " pre-release";
            } else if(isLatestRelease) {
                releaseBadge = "&nbsp;&nbsp;<span class='badge'>Latest release</span>";
                releaseClassNames += " latest-release";
                isLatestRelease = false;
            }

            var downloadInfoHTML = "";
            if(releaseAssets.length) {
                downloadInfoHTML += "<h4><span class='glyphicon glyphicon-download'></span>&nbsp;&nbsp;" +
                    "Download Info</h4>";

                downloadInfoHTML += "<ul>";

                $.each(releaseAssets, function(index, asset) {
                    var assetSize = (asset.size / 1048576.0).toFixed(2);
                    var lastUpdate = asset.updated_at.split("T")[0];

                    downloadInfoHTML += "<li><code>" + asset.name + "</code> (" + assetSize + "&nbsp;MiB) - " +
                        "downloaded " + formatNumber(asset.download_count) + "&nbsp;times. " +
                        "Last&nbsp;updated&nbsp;on&nbsp;" + lastUpdate + "</li>";

                    totalDownloadCount += asset.download_count;
                    releaseDownloadCount += asset.download_count;
                });
            }

            html += "<div class='row " + releaseClassNames + "'>";

            html += "<h3><span class='glyphicon glyphicon-tag'></span>&nbsp;&nbsp;" +
                "<a href='" + releaseURL + "' target='_blank'>" + releaseTag + "</a>" +
                releaseBadge + "</h3>" + "<hr class='release-hr'>";

            html += "<h4><span class='glyphicon glyphicon-info-sign'></span>&nbsp;&nbsp;" +
                "Release Info</h4>";

            html += "<ul>";

            if (releaseAuthor) {
                html += "<li><span class='glyphicon glyphicon-user'></span>&nbsp;&nbsp;" +
                    "Author: #TeamEquinox</li>";
            }

            html += "<li><span class='glyphicon glyphicon-calendar'></span>&nbsp;&nbsp;" +
                "Published: " + publishDate + "</li>";

            if(releaseDownloadCount) {
                html += "<li><span class='glyphicon glyphicon-download'></span>&nbsp;&nbsp;" +
                    "Downloads: " + formatNumber(releaseDownloadCount) + "</li>";              
            }

            html += "</ul>";

            html += downloadInfoHTML;

            if(downloadUrl){
                var downloadButtonHTML ='<div class="row" align="right" id="downloadButton">'; 
                downloadButtonHTML += '<a type="button" class="btn btn-raised btn-info" href="';
                downloadButtonHTML += downloadUrl;
                downloadButtonHTML += '">Download</a></div>';
            }
            html+=downloadButtonHTML;

            html += "</div>";
        });

        if(totalDownloadCount) {
            var totalHTML = "<div class='row total-downloads'>";
            totalHTML += "<h1><span class='glyphicon glyphicon-download'></span>&nbsp;&nbsp;Total Downloads</h1>";
            totalHTML += "<span>" + formatNumber(totalDownloadCount) + "</span>";
            totalHTML += "</div>";

            html = totalHTML + html;
        }

        html += "</div>";
    }

    var resultDiv = $("#stats-result");
    resultDiv.hide();
    resultDiv.html(html);
    $("#loader-gif").hide();
    resultDiv.slideDown();
}

// Callback function for getting release stats
function getStats() {
    var url = ""+window.location; 
    var queryStart = url.indexOf("=") + 1,
        queryEnd   = url.length + 1,
        query = url.slice(queryStart, queryEnd - 1);

    var user = "EquinoxKernel";
    var repository = query;

    var url = apiRoot + "repos/" + user + "/" + repository + "/releases";
    $.getJSON(url, showStats).fail(showStats);
}

// The main function
$(function() {
    getStats();
});
