

// 所有的数据的接口提供给外面


    //jquery中的ajax也提供了promise用法

    function getElectric(){
        return $.ajax('js/json/electric.json');
    }

    function getAi(){
        return $.ajax('js/json/ai.json');
    }

    function getCollocation(){
        return $.ajax('js/json/collocation.json');
    }

    function getBanner(){
        //return $.ajax('js/json/collocation.json');
        return [[$.ajax('js/json/banner_list1.json')],
        [$.ajax('js/json/banner_list2.json')],
        [$.ajax('js/json/banner_list3.json')],
        [$.ajax('js/json/banner_list4.json')],
        [$.ajax('js/json/banner_list5.json')],
        [$.ajax('js/json/banner_list6.json')],
        [$.ajax('js/json/banner_list7.json')],
        [$.ajax('js/json/banner_list8.json')],
        [$.ajax('js/json/banner_list9.json')],
        [$.ajax('js/json/banner_list10.json')],
        ]
    }

    export{getElectric as getElectric, getAi as getAi , getCollocation as getCollocation , getBanner as getBanner}

