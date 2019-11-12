$(function () {
    $(".top").load("http://localhost/1910-wxf/land.html .topW")
    $("header").load("http://localhost/1910-wxf/land.html .header")
    $("footer").load("http://localhost/1910-wxf/land.html .footer")

    $("#family").mouseover(function () {
        // $(this).parent().nextSibling().addClass("active");
        $(this).parent().parent().next().addClass("active");
        $(this)[0].style.background = "#ff3c3c";

    })
    $("#family").mouseout(function () {
        // $(this).parent().nextSibling().addClass("active");
        $(this).parent().parent().next().removeClass("active");
        $(this)[0].style.background = "red";
    })
    $("#classify").mouseover(function () {
        $(this).addClass("active");
    })
    $("#classify").mouseout(function () {
        $(this).removeClass("active");
    })

    class Details {
        constructor(options) {
            this.url = options.url;
            this.goods = options.goods;
            this.ID = location.search.split("=")[1];
            this.load();
        }
        load() {
            var that = this
            ajaxGet(this.url, (res) => {
                that.res = JSON.parse(res);
                that.display();
            })
        }
        display(){
            var that = this;
            this.res.forEach(function(value){
                if(value.goodsId === that.ID){
                    var str =
                    `<p>
                        <span>1号店</span><span>&gt;</span>
                        <span>商品</span><span>&gt;</span>
                        <span>${value.name}</span>
                    </p>
                    <div class="box">
                        <img src="${value.img}" alt="">
                        <div class="right">
                            <p class="name">${value.name}</p>
                            <p>
                                <span>抢购价</span>
                                <span>${value.price}</span>
                                <span class="oPrice">${value.oPrice}</span>
                            </p>
                            <p><i>-</i><input type="text" value="1"><i>+</i></p>
                            <p><b>加入购物车</b></p>
                            <p class="bottom">保障 支持七天无理由退款</p>
                        </div>
                    </div>`
                    that.goods.innerHTML = str;
                ;}
            })
        }
    }
    new Details({
        url: "http://localhost/1910-wxf/goods.json",
        goods: document.getElementById("goods")
    })

});