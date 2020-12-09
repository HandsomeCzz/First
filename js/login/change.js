function cc(elem){ 
    $('.link_al').addClass('current')
    $(elem).on('click',function(){
       
        $(this).children().addClass('current')
        $(this).siblings().children().removeClass('current')
        // console.log($('.banner_right_bottom').eq($(this).index()).get());
        console.log($(this).index());
        $('.banner_right_bottom').eq($(this).index()).show()
        $('.banner_right_bottom').eq($(this).index()).siblings().hide()
    })
 
}
export default cc   ;