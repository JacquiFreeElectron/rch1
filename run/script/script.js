window.onload = function () {
    "use strict";

    nunjucks.configure('view', { autoescape: true });
    let isLogin = false;

    $("#denglu").click(function () {
        isLogin = true;
    });

    $("#tuichu").click(function () {
        isLogin = false;
    });




    $("#ljbzk").click(function () {
        $("#bzk-content").html("标准库是是润潮会的基础设施、重要资产。由全体会员共同建设、维护。");
        $("#singleSdb").html("");

    });

    let login = nunjucks.render('login.njk');

    //alert(JSON.stringify($.getJSON("sdb.json")));
    let sdb = nunjucks.render('sdbview.njk', standardLibrary);
    let jssdb = nunjucks.render('jssdb.njk');


    $("#dybzk").click(function () {
        if (isLogin) {
            $("#singleSdb").html(sdb);
            $("#bzk-content").html("");
        } else { $("#bzk-content").html(login); }

    });
    $("#jsbzk").click(function () {
        if (isLogin) {
            $("#singleSdb").html("")
            $("#bzk-content").html(jssdb);

        } else { $("#bzk-content").html(login); }
    });
}