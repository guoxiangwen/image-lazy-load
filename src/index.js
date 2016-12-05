//初始化循环添加图片，用于测试
window.onload = function() {
        var oul = document.getElementById('test').children[0];
        for (var i = 0; i < 100; i++) {
            var oli = document.createElement("li");
            var oimg = document.createElement("img");
            oimg.lowsrc = "http://imgstore.cdn.sogou.com/app/a/100540002/1170479_s_90_2_219x160.jpg";
            oimg.src = './loading.gif';
            oli.appendChild(oimg);
            oul.appendChild(oli);
        }
        window.onscroll();
    }
    //window开始滑动的时候比较高度差异
window.onscroll = function() {
    var oul = document.getElementById('test').children[0];
    var oli = oul.children;
    for (var j = 0, l = oli.length; j < l; j++) {
        var o = oli[j];
        var t = document.documentElement.clientHeight + (document.documentElement.scrollTop || document.body.scrollTop);
        var h = getElOffSetTop(o);
        //将window可视区域高度和当前img距离浏览器顶部距离作比较,延缓50像素，方便观察效果
        if (h + 50 < t) {
            var oimg = oli[j].children[0];
            oimg.src = oimg.lowsrc;
        }
    }
    console.log("scroll.....")
}

//获取元素相对于页面顶端的距离
function getElOffSetTop(el) {
    var h = 0;
    h = el.offsetTop;
    return h;
}