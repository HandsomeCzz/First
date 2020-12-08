

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

    export{getElectric as getElectric, getAi as getAi , getCollocation as getCollocation}

