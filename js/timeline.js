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
