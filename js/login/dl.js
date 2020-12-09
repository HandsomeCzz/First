function aj(){
    $('button').on('click',function(){
        if($('input').eq(1).val()==''){
            $('input').eq(1).css({
               borderColor:'#f56600'
            })
            var el = $('<p class="el">请输入密码</p>');
            
            if ($('.el').length < 1){
                el.appendTo($('#banner_right_bottom1'));
                var gt =$('<img src="../../images/login/gantanhao.png">')
                gt.prependTo($(el))
                $('#banner_right_bottom1').css({
                    position : 'relative',
                
                });
                el.css({
                    position: 'absolute',
                    top:127,
                    left:0,
                    fontSize:14,
                    lineHeight:'14px',
                    color:'#f56600',
                   
                
                });
                gt.css({
                    width:13,
                    height:13,
                    
                })
            
        
        
            } else {
                $('.el').text('请输入密码')
                var gt =$('<img src="../../images/login/gantanhao.png">')
                gt.prependTo($('.el'))
            }
           
       $('input').eq(1).on('input',function(){
                 console.log(1); 
                 $('input').eq(1).css({
                borderColor:'#ccc'
             })
                el.remove()
             })
            return;  
            
         
        } 
        if($('input').eq(0).val()==''){
            $('input').eq(0).css({
               borderColor:'#f56600'
            })
            var el = $('<p class="el">请输入账号</p>');
            
            if ($('.el').length < 1){
                el.appendTo($('#banner_right_bottom1'));
                var gt =$('<img src="../../images/login/gantanhao.png">')
                gt.prependTo($(el))
                $('#banner_right_bottom1').css({
                    position : 'relative',
                
                });
                el.css({
                    position: 'absolute',
                    top:127,
                    left:0,
                    fontSize:14,
                    lineHeight:'14px',
                    color:'#f56600'
    
                
                });
                gt.css({
                    width:13,
                    height:13
                })
            
        
        
            } else {
                $('.el').text('请输入账号')
                var gt =$('<img src="../../images/login/gantanhao.png">')
                gt.prependTo($('.el'))
            }
           
       $('input').eq(0).on('input',function(){
                 
                 $('input').eq(0).css({
                borderColor:'#ccc'
             })
                el.remove()
             })
      
            }
            
            
        
    $.ajax({
    url:'../../php/dl.php',
    data:{'username':$('input').eq(0).val(),
        'password':$('input').eq(1).val()},
    type:'post',
    success:function index(data){
        data = JSON.parse(data)
        if (data.code == 1){
            localStorage.setItem('username', data.list[0].id);
            window.location.replace('../../index.html');
        }
        else {
            var el = $('<p class="el">用户名或密码不正确</p>');
           
            if ($('.el').length < 1){
                el.appendTo($('#banner_right_bottom1'));
                var gt =$('<img src="../../images/login/gantanhao.png">')
                gt.prependTo($(el))
                $('#banner_right_bottom1').css({
                    position : 'relative',
                
                });
                el.css({
                    position: 'absolute',
                    top:127,
                    left:0,
                    fontSize:14,
                    lineHeight:'14px',
                    color:'#f56600'
    
                
                });
                gt.css({
                    width:13,
                    height:13
                })
            }
            
        }
        
    
     // var el = $('<p>用户名或密码不正确</p>');
//  
// 　　el.appendTo($('#banner_right_bottom1'));
//   
// var gt =$('<img src="../../images/login/gantanhao.png">')
//   
//   gt.appendTo($(el))
    },
    error:function err(){
    
       return false
    }
    
})
return
    })
   
    
} 
export default aj