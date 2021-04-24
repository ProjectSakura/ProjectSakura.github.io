var tl = gsap.timeline();

tl.from(".top_content_data", {
    //time
  duration: 3,
  //time
  opacity: 0,
  x: -300,
  stagger: 0.25,
});
tl.from(
  ".top_content_img",
  {
    duration: 3,
    opacity: 0,
    x: 500,
    stagger: 0.2,
  },
  "=-2.2"
);

mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}