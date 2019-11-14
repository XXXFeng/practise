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
})