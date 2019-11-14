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
    // console.log(localStorage.getItem("msg"));
    class Load{
        constructor(options){
            this.tbody = document.getElementById("tbody");
            this.url = options.url;
            this.load();
        }
        load(){
            var that = this;
            ajaxGet(this.url,(res)=>{
                that.res = JSON.parse(res);
                that.getLocalStorage();
            })
        }
        getLocalStorage(){
            this.msg = JSON.parse(localStorage.getItem("msg"));
            // console.log(this.msg);
            this.display();
        }
        display(){
            console.log(this.res);
            console.log(this.msg);
            var str = "";
            for(var i = 0;i < this.res.length;i++){
                for(var j = 0;j < this.msg.length;j++){
                    if(this.res[i].goodsId === this.msg[j].id){
                        str +=
                         `<tr index="${this.res[i].goodsId}">
                            <td><img src="${this.res[i].img}" alt=""></td>
                            <td>${this.res[i].name}</td>
                            <td>${this.res[i].price}</th>
                            <td>${this.msg[j].num}</th>
                            <td>删除</th>
                        </tr>`
                    }
                }
            }
            this.tbody.innerHTML = str;
        }
        
    }
    new Load({
        url: "http://localhost/1910-wxf/goods1.json"
    });
})