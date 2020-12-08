import { getElectric , getAi , getCollocation} from '../server.js'
import search_menu from './search/search_menu.js';
import banner_footer from './banner/banner.js';
import lightning from './lightning/lightning.js';
import change from './change/change.js';
import initelectric from './init/initElectric.js';
import initAi from './init/initAi.js';
import initCollocation from './init/initCollocation.js';

// search下拉菜单
search_menu();

// 小米闪购 轮播图
lightning();

// change
change();

banner_footer({
    elem : '.banner_footer',
    current : 0
})

$('a').attr('target','black')

getElectric().then((res)=>{

    initelectric(res);

});

getAi().then((res)=>{

    initAi(res);

});

getCollocation().then((res)=>{
    initCollocation(res)
})
