import { } from '../../jquery.js'

var a = 1
var b = 1
var c


/*===================选择国家============================*/

function show(elem) {
    $(elem).on('click', function (ev) {
        if (a > 0) {
            $(this).children('.liebiao').css('display', 'block')
            a = a * -1
        } else {
            if (ev.target.className != 'sousuo') {
                $(this).children('.liebiao').css('display', 'none')
                a = a * -1
            }
        }
        ev.stopPropagation()
    })
    $(document).on('click', function (ev) {
        if (a < 0 && ev.target.className !== '.guojia') {
            $(elem).children('.liebiao').css('display', 'none')
            a = a * -1
        }
    })
    $(elem).children('.liebiao').find('li').on('click', function () {
        var $name = $(this).html()
        $(elem).children('.country').html($name)
        //====================国家电话切换 
        var $lis = $('.phonenumber').children('.liebiao').children('ul').children('li')
        for (var $i = 0; $i < $lis.length; $i++) {
            if ($($lis[$i]).html().includes($(this).html())) {
                var $haoma = $($lis[$i]).children('span').html();
                $('.num').html($haoma)
            }
        }
    })
}

/*=================选择电话号==========================*/

function showa(elem) {
    $(elem).on('click', function (ev) {
        if (b > 0) {
            $(this).nextAll('.liebiao').css('display', 'block')
            b = b * -1
        } else {
            if (ev.target.className != 'sousuo') {
                $(this).nextAll('.liebiao').css('display', 'none')
                b = b * -1
            }
        }
        ev.stopPropagation()
    })
    $(document).on('click', function (ev) {
        if (b < 0 && ev.target.className !== 'sousuo') {
            $(elem).nextAll('.liebiao').css('display', 'none')
            b = b * -1
        }
    })
    $(elem).nextAll('.liebiao').find('li').on('click', function () {
        var $num = $(this).children().html();
        $(elem).children('.num').html($num)
    })
}

/*===================判断电话号码格式=========================*/

function number(elem) {
    var re = /^1[0-9]{10}$/
    $(elem).on('blur', function () {
        if ($(this).val() == '') {
            $('.content').html('<img src="../images/zjw/baocuo.png" alt="">请输入手机号码')
            $('.phonenumber').css('border-color', '#ff6666')
            $('.button').css('margin-top', '25px')
            return false
        } else if (!$(this).val().match(re)) {
            $('.content').html('<img src="../images/zjw/baocuo.png" alt="">手机号码格式错误')
            $('.phonenumber').css('border-color', '#ff6666')
            $('.button').css('margin-top', '25px')
            return false
        }
    })
    $(elem).on('input', function () {
        $('.content').html('')
        $('.phonenumber').css('border-color', '#e8e8e8')
        $('.button').css('margin-top', '15px')
    })
}

/*====================点击注册===========================*/

function button(elem) {
    $(elem).on('click', function () {
        var re = /^1[0-9]{10}$/
        if ($('.number').val() == '') {
            $('.content').html('<img src="../images/zjw/baocuo.png" alt="">请输入手机号码')
            $('.phonenumber').css('border-color', '#ff6666')
            $('.button').css('margin-top', '25px')
            return
        } else if (!$('.number').val().match(re)) {
            $('.content').html('<img src="../images/zjw/baocuo.png" alt="">手机号码格式错误')
            $('.phonenumber').css('border-color', '#ff6666')
            $('.button').css('margin-top', '25px')
            return
        } else {
            //=====================注册页号码
            $('.haoma').html($('.number').val())
            $('.reg').css('display', 'none')
            $('.yuedu').css('display', 'none')
            $('.zuce').css('display', 'block')
        }
    })
}

/*=======================搜索框===========================*/

function sousuo(elem) {
    $(elem).on('input', function () {
        var $lis = $(this).parent().nextAll('ul').children('li')
        $(this).parent().nextAll('ul').children('li').css('display', 'none')
        $(this).parent().nextAll('h4').css('display', 'none')
        for (var $i = 0; $i < $lis.length; $i++) {
            if ($($lis[$i]).html().includes($(this).val())) {
                $($lis[$i]).css('display', 'block')
            }
        }
        if ($(this).val() == '') {
            $(this).parent().nextAll('ul').children('li').css('display', 'block')
            $(this).parent().nextAll('h4').css('display', 'block')
        }
    })
}


/*==================密码验证===============*/



var $yanzheng = function () {
    var re = /(?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,16}$/
    if (!re.test($('.first').val())) {
        $('.firstdiv').html('<img src="../images/zjw/baocuo.png" alt=""> 您输入的密码格式不正确')
        return false
    }else{
        $('.firstdiv').html('')
        return true
    }
}

var $yanzheng2 = function(){
    if($('.first').val() != $('.second').val()){
        $('.seconddiv').html('<img src="../images/zjw/baocuo.png" alt=""> 两次密码不一致')
        return false
    }else{
        $('.seconddiv').html('')
        return true
    }
}


$('.first').on('blur', () => {
    $yanzheng()
})
$('.first').on('input', () => {
    
    $('.firstdiv').html('')
})

$('.second').on('blur', () => {
    $yanzheng2()
    $(document).on('click',function(){
        $yanzheng2()
    })
})



$('.second').on('input', () => {
    $('.seconddiv').html('')
})

$('.tijiao').on('click',()=>{
    if($yanzheng() && $yanzheng2() ){
        console.log($('.haoma').html());
        console.log($('.second').val());
       $.ajax({
         url : '../../../../First/php/reg.php' ,
         data : {
            'username' : $('.haoma').html(),
            'password' : $('.second').val()
         }, 
         type : 'post' ,       
         success : function index (data){
             $('.big').html(data)
         },

         error :function err (){
            return false
         }

       })
    }
    

})







export { show, showa, number, button, sousuo };