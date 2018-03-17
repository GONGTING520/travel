$(function () {
    //轮播图部分
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


    //输入表单部分
    //设置入住日期和离开日期
    var $datein = $('#datein');
    var $dateout = $('#dateout');
    var date = new Date();
    setInputDate($datein, date);
    date.setDate(date.getDate() + 1);
    setInputDate($dateout, date);


    /**
     * 定义设置输入框日期的函数
     * 
     * @param {jquery} elem 要设置的元素
     * @param {object} dateObj 要设置的日期对象
     */
    function setInputDate(elem, dateObj) {
        var month;
        if (dateObj.getMonth() < 9) {
            month = '0' + (date.getMonth() + 1);
        } else {
            month = date.getMonth() + 1;
        }
        var dateString = date.getFullYear() + "-" + month + "-" + date.getDate();
        elem.val(dateString);
    }

    // 热门酒店的导航菜单部分
    $('.hot-hotel .city-list li').on('click', function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    // 回到顶部
    var $top = $('.top');
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