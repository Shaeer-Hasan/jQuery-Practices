$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    let select = $(this).attr("href");
    let scrollArea = $(select).offset().top;
    $("html, body").animate(
      {
        scrollTop: scrollArea,
      },
      500
    );
  });
});
