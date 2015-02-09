
var scrollDown = function (element, speed) {
    var scrollto = $(element);
        $('html, body').animate({
        scrollTop: $(element).offset().top
    }, speed);
};

var scrolltoTop = function (speed) {
    $('html, body').animate({
        scrollTop: '0'
    }, speed);
};
