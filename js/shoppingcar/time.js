function time (){
    var index = 3;
var change=setInterval(() => {
    index *= -1;
    $('.footer_bottom_center .w #bo_logo .info-links a img.img2').css({
        zIndex:3
    })
}, 2000);
 

}
export default time
