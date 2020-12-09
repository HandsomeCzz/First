
function initelectric(res) {
    var url = 'imgUrl';
    var h3Text = 'h3Text';
    var p1Text = 'p1Text';
    var p2Text = 'p2Text';
    var str = '';
    for (var i = 0; i < $('#electric .row .r ul').length; i++) {
        url += i;
        p2Text += i;
        p1Text += i;
        h3Text += i

        str += res.electric_list.map((v, i) => {
            return ` 
            <li class="l ${v.class}" >
                <a href="#">
                    <div class="electric_row_img">
                        <img src="${v[url]}" alt="">
                    </div>
                    <h3>${v[h3Text]}</h3>
                    <p>${v[p1Text]}</p>
                    <p>${v[p2Text]}</p>
                </a>
            </li>
            `
        }).join('');

        str += `
        <li class="l brick-item">
            <a href="#">
                <div class="electric_row_img">
                    <span class="iconfont icon-youjiantou"></span>
                </div>
                <h3>浏览更多</h3>
                <p>热门</p>
            </a>
        </li>
        `

        url = 'imgUrl';
        h3Text = 'h3Text';
        p1Text = 'p1Text';
        p2Text = 'p2Text';

        $('#electric .row .r ul').eq(i).html(str);
        str = '';
    }

}

export default initelectric;