
        function myFunc1() {
            var android10 = document.getElementById("myDIV");
            var android11 = document.getElementById("myDIV1");
            if (android10.style.display === "none") {
                android10.style.display = "block";
                android11.style.display = "none";
            } else {
                android10.style.display = "none";
                android11.style.display = "none";
            }
        }
        function myFunc5() {
            var android10 = document.getElementById("myDIV");
            var android11 = document.getElementById("myDIV1");
            if (android11.style.display === "none") {
                android11.style.display = "block";
                android10.style.display = "none";
            } else {
                android11.style.display = "none";
                android10.style.display = "none";
            }
        }
        myFunc1();
function filter() {
    var input = document.getElementById('search123');
    var FilterValue = input.value.toUpperCase();
    var ul = document.getElementById('search-ul');
    var li = ul.getElementsByClassName('search-li');
    for (let i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName('div')[0];
        if (a.innerText.toUpperCase().indexOf(FilterValue) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function filter1() {
    var input = document.getElementById('search1234');
    var FilterValue = input.value.toUpperCase();
    var ul = document.getElementById('search-ul1');
    var li = ul.getElementsByClassName('search-li');
    for (let i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName('div')[0];
        if (a.innerText.toUpperCase().indexOf(FilterValue) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.fixed-action-btn').floatingActionButton();
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
    $('.parallax').parallax();
});
$(document).ready(function() {
    $('.sidenav').sidenav();
    $('.fixed-action-btn').floatingActionButton();
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
    $('.parallax').parallax();
    // $('.modal').modal();
});