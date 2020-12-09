

import { } from '../jquery.js';
import { } from './roll.js';
window.onload = setTimeout(function () {
    window.scrollTo(0, 130);  //修改baidu500为指zhi定dao高zhuan度shu
}, 50);

function off(n) {
    if (window.onscroll = $(n)) {
        $(n).animate({
            opacity: 1,
            marginTop: $(n).css('marginTop').replace('px', '') - 50
        }, 1000).next().animate({
            opacity: 1,
            marginTop: $(n).next().css('marginTop').replace('px', '') - 50
        }, 1500).next().animate({
            opacity: 1,
            marginTop: $(n).next().next().css('marginTop').replace('px', '') - 50
        }, 1800)
    } else {

    }
};
off('.big1 img');

var roll = new Roll({
    offsetTop: 100
  });
  console.log(roll);

  function gan (elem){
    roll.push(document.querySelector(elem), function (context, done){
              console.log('图片1出现在视口，可以执行操作了！');
              $(elem).animate({
                opacity: 1,
                marginTop: $(elem).css('marginTop').replace('px', '') - 50
            }, 2000)
              done(this, context);
          });

  }
  gan('.big2 p')
  gan('.big5 h2')
  gan('.big6 h3')
  gan('.big7 h2')
  gan('.big8 h3')
  gan('.big10 h3')
  gan('.big10 h3')
  gan('.big10 h3')
  gan('.big11 h3')
  gan('.big12 h3')
  gan('.big14 h2')
  gan('.big16 h2')
  gan('.big17 h2')
  gan('.big24 h2')
  gan('.big26 h2')
  gan('.big27 h2')
  gan('.big28 h2')
  gan('.big29 h2')

var img = document.querySelectorAll('.big23 img');
var li = document.querySelectorAll('.big23 ul li');

for(var i=0;i<li.length;i++){
    li[i].index = i;
    li[i].onclick=function () {
        for(var i=0;i<li.length;i++){
            img[i].className = '';
        }
            img[this.index].className = 'z-in' ;
        
    }
}       
    var sum = document.querySelectorAll('.big23 img')
    var count =1;
    var timer = setInterval(function () {
        for ( var i=0;i<sum.length;i++){
            sum[i].className = "";
        }
        sum[count-1].className = "z-in";
        count++;
        if (count>3){
            count=1;
        }
    },3000)

