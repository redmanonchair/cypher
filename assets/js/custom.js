wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function(box) {
        //  console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();

$(window).on('load', function() {

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            $(".header").addClass("white-header");
        } else {
            $(".header").removeClass("white-header");
        }
    });





    var object1 = $('#object1');
    var layer = $('#layer');

    layer.mousemove(function(e) {
        var valueX = (e.pageX * -1 / 120);
        var valueY = (e.pageY * -1 / 120);

        object1.css({
            'transform': 'translate3d(' + valueX + 'px,' + valueY + 'px,0)'
        });
    });

});