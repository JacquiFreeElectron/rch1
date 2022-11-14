window.onload = function () {
    "use strict";

    nunjucks.configure('view', { autoescape: true }); \

    let isLogin = true;

    $("#ljbzk").click(function () {
        $("#bzk-content").html("标准库是是润潮会的基础设施、重要资产。由全体会员共同建设、维护。");

    });

    let login = nunjucks.render('login.njk');
    let standardLibrary = $.getJSON("../sdb.json");
    let sdb = nunjucks.render('sdbview.njk', standardLibrary)
    $("#dybzk").click(function () {
        if (isLogin) {
            $("#bzk-content").html(sdb);
        } else { $("#bzk-content").html(login); }

    });
    $("#jsbzk").click(function () {
        if (isLogin) {

        } else { $("#bzk-content").html(login); }
    });
}