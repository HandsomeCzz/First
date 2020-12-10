import { } from '../../jquery.js'


/*===================吸顶==============*/

function xiding() {
    $(window).on('scroll', function () {
        var a = $(document).scrollTop()
        var b = $('.title').offset().top
        if (a > b) {
            $('.title2').stop().animate({ top: 0 }, )
        } else {
            $('.title2').stop().animate({ top: -100 }, )
        }
    })
}
/*====================轮播图==============*/


function lunbo(){
    var a = 0
    let timer = setInterval(autoPlay, 2000);
    function autoPlay(){
        if(a == $('.tupian img').length-1 ){
            a = -1
        }
        a++
        $('.tupian img').eq(a).animate({opacity: 1}).siblings().animate({opacity: 0})
        $('.xiabiao li').eq(a).attr('class','active').siblings().attr('class','')
    }

    /*===============后退==============*/
    
    $('.left').on('click',function(){
        a--
        if(a==-1){
            a = $('.tupian img').length-1
        }
        $('.tupian img').eq(a).animate({opacity: 1}).siblings().animate({opacity: 0})
        $('.xiabiao li').eq(a).attr('class','active').siblings().attr('class','')
    })

    /*================前进================*/

    $('.right').on('click',function(){
        a++
        if(a==$('.tupian img').length){
            a = 0
        }
        $('.tupian img').eq(a).animate({opacity: 1}).siblings().animate({opacity: 0})
        $('.xiabiao li').eq(a).attr('class','active').siblings().attr('class','')
        
    })

    /*===================下标点击跳转================*/

    $('.xiabiao li').on('click',function(){
        $('.tupian img').eq($(this).index()).animate({opacity: 1}).siblings().animate({opacity: 0})
        $(this).attr('class','active').siblings().attr('class','')
        a = $(this).index()
    })

    /*==============鼠标移入=============*/
    $('.pic').on('mouseover',function(){
        clearInterval(timer);
       
    })
    /*===============鼠标移出==============*/
    $('.pic').on('mouseout',function(){
        timer = setInterval(autoPlay, 2000);
    })
}
























export { xiding , lunbo };