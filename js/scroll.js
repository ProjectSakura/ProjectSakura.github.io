(function ($) {
    "use strict";

    $(function () {
        var header = $(".start-style");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 10) {
                header.removeClass('start-style').addClass("scroll-on");
            } else {
                header.removeClass("scroll-on").addClass('start-style');
            }
        });
    });

    //Animation

    $(document).ready(function () {
        $('body.hero-anime').removeClass('hero-anime');
    });

    //Menu On Hover

    $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
        if ($(window).width() > 750) {
            var _d = $(e.target).closest('.nav-item');
            _d.addClass('show');
            setTimeout(function () {
                _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
            }, 1);
        }
    });

})(jQuery);
var preloader = document.getElementById('loading');
const myFunction23 = setInterval(() => {
    preloader.style.display = "none";
}, 3000)
async function helllo() {
    async function showmodal1() {
        $("#testmodal").modal('show');
        const mobile_name = document.querySelector(".mobile_name");
        mobile_name.innerText = "We are fetching the build data ,Please Wait ...";


        const para = document.querySelector(".data-modal");
        const rating = document.querySelector(".rating");
        rating.innerHTML = `<div class="rating">Please dont forget to leave 5 star rating at sourceforge</div>`;
        para.innerHTML = `	
        <center>

            <lottie-player src="image/download.json" background="transparent" speed="1"
                style="width: 250px; height: 250px;" loop autoplay></lottie-player>
        </center>	
        `

    }
    await showmodal1()
}
async function helllo1() {
    async function showmodal1() {
        $("#testmodal1").modal('show');
        const mobile_name = document.querySelector(".mobile_name1");
        mobile_name.innerText = "We are fetching the build data ,Please Wait ...";


        const para = document.querySelector(".data-modal1");
        const rating = document.querySelector(".rating1");
        rating.innerHTML = `<div class="rating">Please dont forget to leave 5 star rating at sourceforge</div>`;
        para.innerHTML = `	
        <center>

            <lottie-player src="image/download.json" background="transparent" speed="1"
                style="width: 250px; height: 250px;" loop autoplay></lottie-player>
            
        </center>		
        `

    }
    await showmodal1()
}