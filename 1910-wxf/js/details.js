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
            this.p = options.p;
            this.box = options.box;
            this.wrap = options.wrap;
            this.right = options.right;
            this.ID = location.search.split("=")[1];
            this.load();
        }
        load() {
            var that = this;
            ajaxGet(this.url, (res) => {
                that.res = JSON.parse(res);
                that.display();
            })
        }
        display() {
            var that = this;
            var str;
            this.res.forEach(function (value) {
                if (value.goodsId === that.ID) {
                    that.p.innerHTML = `
                        <span>1号店</span><span>&gt;</span>
                        <span>商品</span><span>&gt;</span>
                        <span>${value.name}</span>  
                    `;
                    that.wrap.innerHTML += `
                        <img src="${value.img}" class="img">
                        <div class="big" style="background:url(${value.img}) center;background-size:720px 720px"></div>
                    `;
                    str =
                        `
                        <p class="name">${value.name}</p>
                        <p>
                            <span>抢购价</span>
                            <span>${value.price}</span>
                            <span class="oPrice">${value.oPrice}</span>
                        </p>
                        <span class="size">选择尺码：</span><span class="size">${value.size}</span>
                        <p><i id="decrease">-</i><input type="text" value="1" min="1" id="displayGlass"><i id="add">+</i></p>
                        <p><b>加入购物车</b></p>
                        <p class="bottom">保障 支持七天无理由退款</p>
                            
                        `
                    that.right.innerHTML = str;
                    new Glass($(".small")[0], $(".wrap")[0], $(".big")[0]);
                }
            })
            this.addEvent();
        }
        addEvent() {
            var displayGlass = document.getElementById("displayGlass");
            // console.log(displayGlass);
            this.goods.addEventListener("click", function (e) {
                e = window.event || event;
                if (e.target.id === "decrease") {
                    displayGlass.value > 1 ? displayGlass.value = Number(displayGlass.value) - 1 : displayGlass.value = displayGlass.value;
                } else if (e.target.id === "add") {
                    displayGlass.value = Number(displayGlass.value) + 1;
                }
            })
        }
    }
    new Details({
        url: "http://localhost/1910-wxf/goods.json",
        goods: document.getElementById("goods"),
        p: document.getElementById("p"),
        box: document.querySelector(".box"),
        wrap: document.querySelector(".wrap"),
        right: document.querySelector(".right")
    })

    /* 放大镜功能 */
    function Glass(jp, small, big) {
        this.jp = jp;
        this.small = small;
        this.big = big;
        this.Move()
    }
    Glass.prototype.Move = function () {
        var that = this;
        this.small.onmouseenter = function () {
            that.jp.style.display = "block";
            that.big.style.display = "block";
            document.onmousemove = function (e) {
                var x = e.pageX - that.small.offsetParent.offsetLeft - that.jp.clientWidth / 2;
                var y = e.pageY - that.small.offsetParent.offsetTop - that.jp.clientHeight / 2;
                if (x <= 0) {
                    x = 0;
                } else if (x >= that.small.clientWidth - that.jp.clientWidth) {
                    x = that.small.clientWidth - that.jp.clientWidth;
                } if (y <= 0) {
                    y = 0;
                } else if (y >= that.small.clientHeight - that.jp.clientHeight) {
                    y = that.small.clientHeight - that.jp.clientHeight;
                }
                that.jp.style.left = x + "px";
                that.jp.style.top = y + "px";
                var r = (that.small.clientWidth - that.jp.clientWidth) / (720 - that.big.clientWidth)
                that.big.style.backgroundPositionX = -x / r + "px"
                that.big.style.backgroundPositionY = -y / r + "px"
            }
            that.small.onmouseleave = function () {
                that.jp.style.display = "none";
                that.big.style.display = "none";
            }
        }
    }





});