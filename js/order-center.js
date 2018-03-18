$(function () {
    $('.left .order li').on('click', function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });
});