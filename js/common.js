$(function () {
    // 回到顶部
    var $top = $('.top-suggest .top');
    $(window).on('scroll', function () {
        var iTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (iTop >= 400) {
            $top.fadeIn();
        } else {
            $top.fadeOut();
        }
    });
    $top.on('click', function () {
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
    });
});