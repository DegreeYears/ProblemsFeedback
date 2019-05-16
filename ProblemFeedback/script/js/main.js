$(function () {
    $(function () {
        
        $(".menuList").children("span").hover(function () {
            if ($(this).css("background-color") == 'rgb(238,82,54)') {
            } else {
                $(this).css("color", "#DE3812");
            }
        }, function () {
            $(this).css("color", "white");
        });
        $(".oneList").click(function () {
            for (var i = 1; i < 6; i++) {
                $("#oneList" + i).css("background-color", "#26212f");
            }
            $(this).css("background-color", "#ee5236");
            $(this).css("color", "white");
        });
        //iframe页面跳转 动态修改页面
        $(".oneList").click(function () {
            if ($(this).attr("id") == "oneList1") {
                $('.mainIframe').attr('src', 'hot/HotProblems.aspx');
            }
            if ($(this).attr("id") == "oneList2") {
                $('.mainIframe').attr('src', 'submit/ProblemsSubmit.aspx');
            }
            if ($(this).attr("id") == "oneList3") {
                $('.mainIframe').attr('src', 'resolve/ResolveProblems.aspx');
            }
            if ($(this).attr("id") == "oneList4") {
                $('.mainIframe').attr('src', 'summary/ProblemsSummary.aspx');
            }
            if ($(this).attr("id") == "oneList5") {
                $('.mainIframe').attr('src', 'others/OthersProblems.aspx');
            }
            //监听iframe异步资源加载
            //$('.mainIframe').load(function () {
            //    $(this).contents().find(".titleDiv").html(name + "问题反馈");
            //});
        });
        $(".mainIframe").load(function () {
            var iframeHeight = $(".mainIframe").contents().find("body").height()+60;
            $(".mainIframe").height(iframeHeight);
            $("#rightDiv").height(iframeHeight + 40);
            $("#contentDiv").height(iframeHeight + 60);
        });
    });
});

