$(function () {
    var $slideshowIndexLis = $(".slideshow .index li");
    var $slideshowImgLis = $(".slideshow .img li");
    var iNow = 0;
    $slideshowIndexLis.on('mouseover', function () {
        iNow = $(this).index();
        $slideshowImgLis.eq(iNow).addClass('selected').siblings().removeClass('selected');
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    setInterval(function () {
        iNow++;
        iNow = iNow == $slideshowIndexLis.length ? 0 : iNow;
        $slideshowIndexLis.eq(iNow).trigger('mouseover');
    }, 5000);
});