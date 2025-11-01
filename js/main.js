

// Start Fixed Header
$(window).on("scroll", function () {
  var header = $("#fixheader");

  if ($(this).scrollTop() > 100) {
    // jado scroll 100px ton upar jave
    header.addClass("sticky").removeClass("sticky-down");
  } else {
    header.removeClass("sticky").addClass("sticky-down");
  }
});
// End Fixed Header

// Start Smoothscroll
$('.smoothscroll').on('click', function (e) {
    e.preventDefault(); // stop default jump
    var hash = $(this).attr('href') || $(this).data('href');

    if (hash && $(hash).length) {
        var top = $(hash).offset().top - 50; // adjust header height
        $('html, body').animate(
            { scrollTop: top },
            800, // speed in ms (800 = smoother)
            'swing', // easing effect
            function () {
                // update hash after scroll ends
                window.location.hash = hash;
            }
        );
    }
});

// End Smoothscroll
// Start Cursor Script
let cursor = $(".cursor");
let follower = $(".cursor2");

let posX = 0,
    posY = 0;

let mouseX = 0,
    mouseY = 0;

gsap.ticker.add(() => {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    gsap.set(follower, {
        x: posX - 12,
        y: posY - 12,
    });

    gsap.set(cursor, {
        x: mouseX,
        y: mouseY,
    });
});

$(document).on("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
// End Cursor Script

