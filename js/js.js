$(document).ready(function(){
    function showCase(obj){
        var w_height = $(window).height();
        $(obj+" .case").each(function(index){
            var thisTop = $(this).offset().top;
            if(thisTop - w_height < 100){
                $(this).addClass('on');
            }
        });
    }
    // showCase('#index-case');
    // showCase('#work-case');
    $('body').scroll(function(){
        showCase('#index-case');
        showCase('#work-case');
    });
    var g_width  = $("#guanggao").width();
    var g_height = $("#guanggao").height();
    $("#guanggao .sz").css('top', g_height - 60).css('left', g_width/2 + $('#guanggao .sz').width()/2).show();
    $("#guanggao .left").css('left', 70).css('top', g_height/2 ).show().click(function(){
        var index = $("#guanggao .sz .liang").index();
        if(index == 0){
            index = $("#guanggao .sz span").length - 1;
        }else{
            index--;
        }
        $("#guanggao .sz span:eq("+index+")").trigger('mouseover');
    });
    $("#guanggao .right").css('right', 70).css('top', g_height/2 ).show().click(function(){
        var index = $("#guanggao .sz .liang").index();
        if(index == ($("#guanggao .sz span").length) - 1){
            index = 0;
        }else{
            index++;
        }
        $("#guanggao .sz span:eq("+index+")").trigger('mouseover');
    });
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

    $("#work-nav ul li").mouseover(function(){
        if($(this).hasClass('on')){ return false; }
        $(this).find('p').animate({
            width:'50%',
        }, 300);
    }).mouseleave(function(){
        if($(this).hasClass('on')){ return false; }
        $(this).find('p').animate({
            width:'0%',
        }, 300);
    });

    $(".show_img").attr('src', $(".thumb li img:eq(0)").attr('data-img'));

    $(".thumb li").click(function(){
        $(".thumb li").removeClass('liang');
        $(this).removeClass('liang');
        $(".show_img").attr('src', $(this).find('img').attr('data-img'));
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