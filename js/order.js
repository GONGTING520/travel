$(function () {
    var $iUnitPrice = $(".left .order-info .all-room-price").text();
    $(".left .order-info .rooms").on("change", function () {
        $(".left .order-info .all-room-price")
            .add(".right .hotel-info .price").text($iUnitPrice * this.value);
    });
});