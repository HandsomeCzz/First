import { } from '../../jquery.js'


var id = window.location.search.substr(1).match(id)
$('.id').html(id.input.replace('id=',''))

$('.login').on('click',function(){
    location.href="../html/login/login.html"
})