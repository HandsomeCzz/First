import {} from '../jquery.js'
import change from './change.js'
// var elem=document.querySelector('.link_al')
import aj from './dl.js'



change('#banner_right_top div')
aj('#banner_right_bottom1')



var query = window.location.search.replace('?callback=','')
if (query){
    localStorage.setItem('href', query);
} else {
    // $('#banner a').attr('href','../../index.html')
    localStorage.removeItem('href')
}
