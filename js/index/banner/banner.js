
import {} from '../../jquery.js';

var nowIndex = 0;
var timer;
var onOver = false;

function foo(optison){
    var settings = Object.assign({
        elem: '',
        current : 0
    },optison)

    init(settings.current);
    footer_Click(settings.elem);
    over(settings.elem);
    footer_move(settings.elem);
    btnClick(settings.elem);

    
    timer = setInterval(function(){
        if (!onOver){
            if(nowIndex == $(settings.elem).length - 1){
                nowIndex = 0;
            }else{
                nowIndex++;
            }
        }

        $(settings.elem).eq(nowIndex).css({
            backgroundColor : 'rgba(255,255,255,.4)'
        }).siblings().css({
            backgroundColor : 'rgba(0,0,0,.4)'
        })
                
        $('.banner_img').eq(nowIndex).animate({opacity : 1} , 1000);
        $('.banner_img').eq(nowIndex).siblings('.banner_img').animate({opacity : 0} , 1000);

    },5000)
}

// banner初始化
function init(current){
    $('.banner_img').eq(current).css('opacity',1);
    $('.banner_footer').eq(current).css({
        backgroundColor : 'rgba(255,255,255,.4)',
        borderColor : 'rgba(0,0,255,.3)'
    });
}

// footer点击
function footer_Click(elem){
    $(elem).on('click',function(){
        $(this).css({
            backgroundColor : 'rgba(255,255,255,.4)',
            borderColor : 'rgba(0,0,255,.3)'
        }).siblings().css({
            backgroundColor : 'rgba(0,0,0,.4)',
            borderColor : 'rgba(0,0,255,.3)'
        })
                
        $('.banner_img').eq($(this).index()).animate({opacity : 1} , 500);
        $('.banner_img').eq($(this).index()).siblings().finish()
        $('.banner_img').eq($(this).index()).siblings('.banner_img').animate({opacity : 0} , 500);

        nowIndex = $(this).index();
    })  
}

// 移入banner
function over(elem){
    $(elem).parents(".banner").on('mouseover',function(){
        onOver = true;
        up(elem);
    })
}

// 移出banner
function up(elem){
    $(elem).parents(".banner").on('mouseout',function(ev){
        if ($(elem).parents(".banner").attr('class') != "footer" && $(elem).parents(".banner").attr('class') != "btn"){
            onOver = false;
        }
    })
}

// 移入footer
function footer_move(elem){
    $(elem).on('mousemove',function(){
        $(this).css({
            backgroundColor : 'rgba(255,255,255,.4)',
            borderColor : 'rgba(0,0,255,.3)'
        })
    })

    footer_out(elem);
}

// 移出footer
function footer_out(elem){
    $(elem).on('mouseout',function(){
        if ($(this).index() != nowIndex){
            $(this).css({
                backgroundColor : 'rgba(0,0,0,.4)',
                borderColor : 'rgba(0,0,255,.3)'
            })
        }
    })
}

function btnClick(elem){
    $('.banner_btn').on('click',function(){
        if ($(this).index() == 0){
            if(nowIndex == 0){
                nowIndex = $(elem).length - 1;
            } else {
                nowIndex -= 1;
            }
        } else {
            if(nowIndex == $(elem).length - 1){
                nowIndex = 0;
            } else {
                nowIndex += 1;  
            }
        }
        
        $(".banner_footer").eq(nowIndex).css({
            backgroundColor : 'rgba(255,255,255,.4)',
            borderColor : 'rgba(0,0,255,.3)'
        }).siblings().css({
            backgroundColor : 'rgba(0,0,0,.4)',
            borderColor : 'rgba(0,0,255,.3)'
        })
        
        $('.banner_img').eq(nowIndex).animate({opacity : 1} , 500);
        $('.banner_img').eq(nowIndex).siblings().finish();
        $('.banner_img').eq(nowIndex).siblings('.banner_img').animate({opacity : 0} , 500);
    })
}

export default foo;