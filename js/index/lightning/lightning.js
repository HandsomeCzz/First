function foo(){
    var index = 0;
    var width = 248 * 4;
    $('.lightning_row_controls span').eq(0).on('click',function(){
        if (index > 0){
            index--
            if(index == 0){
                $(this).attr('disabled','disabled');
            } else {
                $(this).removeAttr("disabled");
            }

            $('.lightning_row_shop ul').animate({marginLeft : -(width * index)} , 500)
        }
    })

    $('.lightning_row_controls span').eq(1).on('click',function(){
        if (index < 2){
            index++
            if(index == 2){
                $(this).attr('disabled','disabled');
            } else {
                $(this).removeAttr("disabled");
            }
            $('.lightning_row_shop ul').animate({marginLeft : -(width * index)} , 500)
        }
        console.log(index);
    })

    setInterval(function(){
        if (index == 2){
            index = 0;
        } else {
            index++;
        }

        $('.lightning_row_shop ul').animate({marginLeft : -(width * index)} , 500)
    },5000);
}

export default foo;