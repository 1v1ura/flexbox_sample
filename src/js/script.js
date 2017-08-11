$(function() {
    // 追従ナビゲーション
    (function() {
        $('body').scrollspy({
            target: '.m-scrollspyBlock'
        });
        var $scrollspyNav = $('.m-scrollspyBlock-list');
        var navPos = $scrollspyNav.offset().top;

        $(window).on('scroll', function() {
            var scrollPos = $(this).scrollTop();
            if (navPos <= scrollPos) {
                $scrollspyNav.addClass('is-fixed');
            } else {
                $scrollspyNav.removeClass('is-fixed');
            }
        })

        $(window).on('load', function() {
            $(this).trigger("scroll");
        })
    }());

    // スムーススクロール
    (function() {
        $('.m-anchorScroll a[href^="#"]').on('click', function() {
            var speed = 400;
            var href = $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top;
            $("html, body").animate({scrollTop:position}, speed, "swing");
            return false;
        });
    }());
});