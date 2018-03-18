$(function () {
    var $login = $('.login');
    var $regist = $('.regist');
    $('.container .index li').on('click', function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        // 如果是登陆，则显示登陆部分
        if (this.value == 1) {
            $regist.hide();
            $login.show();
        } else {
            $login.hide();
            $regist.show();
        }
    });
});