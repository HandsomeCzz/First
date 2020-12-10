import {xiding , lunbo} from './mensuo/mensuo.js'



xiding()
lunbo()



$('.select li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
})
