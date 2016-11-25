$(document).ready(function(){
    $(".case").mouseover(function(){
        var width  = $(this).width();
        var height = $(this).height();
        $(this).css('width', width).css('height', height);
        $(this).find('img').animate({
            height:(height*1.1)+'px',
            width:(width*1.1)+'px',
        }, 300);
        $(this).find('.desc').fadeIn();
    }).mouseleave(function(){
        $(this).find('img').animate({
            height:'100%',
            width:'100%',
        }, 300);
        $(this).find('.desc').fadeOut();
    });
});

/*幻灯片*/
(function ($) {
    $.fn.extend({
        "liteNav": function (t) {
            var $this = $(this), i = 0, $pics = $('#guanggao'), autoChange = function () {
                var $currentPic = $pics.find('a:eq(' + (i + 1 === 4 ? 0 : i + 1) + ')');
                $currentPic.css({
                    display: 'block'
                }).siblings('a').css({
                    display: 'none'
                });
                $pics.find('.sz>span:contains(' + (i + 2 > 4 ? 4 - i : i + 2) + ')').attr('class', 'liang').siblings('span').attr('class', 'wu');
                i = i + 1 === 4 ? 0 : i + 1;
            }, st = setInterval(autoChange, t || 2000);
            $this.hover(function () {
                clearInterval(st);
            }, function () { st = setInterval(autoChange, t || 2000) });
            $pics.find('.sz>span').mouseover(function () {
                i = parseInt($(this).text(), 10) - 2;
                autoChange();
            });
        }
    });
}(jQuery));