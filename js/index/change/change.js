

function change() {

    $('.table .more a').on('mouseover', function () {

        $(this).parents('li').attr('class', 'l currten');
        $(this).parents('li').siblings().attr('class', 'l');

        $(this).parents('.table').find('.r ul').eq($(this).parents('li').index()).css({ display: 'block' }).siblings().css({ display: 'none' })

    })


}


export default change;