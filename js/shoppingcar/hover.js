 function hover(){
$('#footer section.w .lr .right>div>a').eq(1).on('mouseover',function(){
    $('#footer section.w .lr .right>img').css({
        display:'block',
        position:'absolute',
        top:230,
        left:1090,
        width:126,
        height:126
    })
    $('#footer section.w .lr .right>div>a').eq(1).on('mouseout',function(){
        $('#footer section.w .lr .right>img').css({
            display:'none',
            
        })
    })
})
 }
export default hover