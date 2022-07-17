// Functions to alterbody class scrolling direction
    var scrollpos = 0;
    $(window).scroll((function() {
        $(window).scrollTop() > scrollpos ? ($("body").addClass("scrolling-down"), $("body").removeClass("scrolling-up")) : ($("body").addClass("scrolling-up"), $("body").removeClass("scrolling-down")), scrollpos = $(window).scrollTop(), $(window).scrollTop() > $('header').height() ? $("body").addClass("liftoff") : ($("body").removeClass("liftoff"), jQuery("body").removeClass("scrolling-up"), $("body").removeClass("scrolling-down")), fade = $(window).scrollTop() / 1e3, fade < .5 && $(".cover .fader").css("opacity", .5 + fade)
    }))
