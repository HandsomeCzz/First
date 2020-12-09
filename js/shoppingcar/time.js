function time() {
    var index = 3;
    setInterval(() => {
        index *= -1;
        $('.footer_bottom_center .w #bo_logo .info-links a img.img2').css({
            zIndex: index
        })
    }, 2000);


}
export default time
