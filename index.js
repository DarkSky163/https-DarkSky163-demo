
// 秒杀右侧滑块


$(document).ready(function () {
    var move = false;
    var _x, _y;
    var item = $(".swiper-wrapper li");
    var len = 0;
    for (var i = 0; i < item.length; i++) {
        len += $(".swiper-wrapper li").eq(i).outerWidth(true);
    }
    $(".swiper-wrapper").css({ "width": len });

    $(".swiper-wrapper").mousedown(function (e) {
        move = true;
        _x = e.pageX - parseInt($(".swiper-wrapper").css("left"));
        // _y=e.pageY-parseInt($(".swiper-wrapper").css("top")); 
    });
    $(document).mousemove(function (e) {
        if (move) {
            var x = e.pageX - _x;//控件左上角到屏幕左上角的相对位置 
            var y = e.pageY - _y;
            var distansR = -($('.swiper-wrapper').width() - $(window).width());
            console.log($(window).width(), distansR)
            //   $(".swiper-wrapper").css({"top":y,"left":x}); 
            if (x > 0) {
                $(".swiper-wrapper").css({ "left": 0 });
                return false;
            }
            console.log(x, distansR);
            if (x < distansR) {
                $(".swiper-wrapper").css({ "left": distansR });
                console.log("不能在右滑啦")
                return false;
            }
            $(".swiper-wrapper").css({ "left": x });

        }
    }).mouseup(function () {
        move = false;
    });
})