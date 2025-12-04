$(document).ready(function () {
  var slides = $(".carousel-slide");
  var current = 0;
  function nextSlide() {
    var currentSlide = slides.eq(current);
    var next = (current + 1) % slides.length;
    var nextSlide = slides.eq(next);
    currentSlide.fadeOut(500);
    nextSlide.css("left", "10px");
    nextSlide.fadeIn(500, function () {
      nextSlide.animate(
        {
          left: "0px",
        },
        500
      );
    });
    current = next;
  }
  function prevSlide() {
    var currentSlide = slides.eq(current);
    var last = (current - 1 + slides.length) % slides.length;
    var prevSlide = slides.eq(last);
    currentSlide.fadeOut(500);
    prevSlide.css("left", "-10px");
    prevSlide.fadeIn(500, function () {
      prevSlide.animate(
        {
          left: "0px",
        },
        500
      );
    });
    current = last;
  }
  $("#nextBtn").click(function () {
    nextSlide();
  });
  $("#prevBtn").click(function () {
    prevSlide();
  });
});
