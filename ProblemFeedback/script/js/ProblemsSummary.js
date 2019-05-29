$(function () {
    //var findStr = getQueryStr();
    refreshView("0");
    $.ajax({
        type: "POST",
        url: "ProblemsSummary.aspx/GetDate",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: function (data) {
            alert("error");
        },
        success: function (result) {
            if (result.d != null) {
                var json = eval("(" + result.d + ")");
                $.each(json, function (index, item) {
                    $(".titile_pCountDiv_2_1_1").html("今日问题：" + json[index].today_p);
                    $(".titile_pCountDiv_2_1_2").html("历史问题：" + json[index].his_p);
                    $(".titile_pCountDiv_2_1_3").html("已解决：" + json[index].resolved_p);
                });
            }
            else {
                alert("未知错误！");
            }
        }
    });
    //主页面查询
    //if (findStr != null) {
    //    var type = ["采购", "销售", "生产", "库存"];
    //    var isCz = -1;
    //    var nowType = "";
    //    for (var i = 0; i < type.length; i++) {
    //        isCz = findStr.indexOf(type[i]);
    //        if (isCz != -1) {
    //            nowType = type[i];
    //            break;
    //        }
    //    }
    //    alert("正在完善！");
    //}
    //$(".findDiv").children("img").on("click", function () {
    //    var findText = $(".findDiv").children("input").val();
    //    if (findText == "") {
    //        alert("搜索内容为空！");
    //    }
    //    else {
    //        alert("正在完善！");
    //    }
    //});
    $(".typeDiv").children("div").on("click", function () {
        if ($(this).css("background-color") == 'rgb(128, 128, 128)') {
            $(this).css("background-color", "white");
            $(this).css("color", "#808080");
        }
        else if ($(this).css("background-color") == 'rgb(255, 255, 255)') {
            if ($(this).text() == "全部") {
                for (var i = 2; i < 7; i++) {
                    $(".submitP_type" + i).css("background-color", "white");
                    $(".submitP_type" + i).css("color", "#808080");
                }
                $(".submitP_type1").css("background-color", "#808080");
                $(".submitP_type1").css("color", "white");
            } else if ($(this).text() == "已解决") {
                $(".submitP_type8").css("background-color", "white");
                $(".submitP_type8").css("color", "#808080");
                $(".submitP_type7").css("background-color", "#808080");
                $(".submitP_type7").css("color", "white");
            } else if ($(this).text() == "未解决") {
                $(".submitP_type7").css("background-color", "white");
                $(".submitP_type7").css("color", "#808080");
                $(".submitP_type8").css("background-color", "#808080");
                $(".submitP_type8").css("color", "white");
            }
            else {
                $(".submitP_type1").css("background-color", "white");
                $(".submitP_type1").css("color", "#808080");
                $(this).css("background-color", "#808080");
                $(this).css("color", "white");
            }
        }
        //判断类型条件
        var flag = "";
        for (var i = 1; i < 7; i++) {
            if ($(".submitP_type" + i).css("background-color") == 'rgb(128, 128, 128)') {
                flag += $(".submitP_type" + i).text() + ",";
            }
        }
        if (flag != "") {
            flag = flag.substring(0, flag.length - 1);
        }
        if ($(".submitP_type7").css("background-color") == 'rgb(128, 128, 128)') {
            if (flag != "") {
                flag += ",已解决";
            } else {
                flag += "已解决";
            }
        } else if ($(".submitP_type8").css("background-color") == 'rgb(128, 128, 128)') {
            if (flag != "") {
                flag += ",未解决";
            } else {
                flag += "未解决";
            }
        }
        refreshView(flag);
    });
});
function refreshView(flag) {
    $.ajax({
        type: "POST",
        url: "ProblemsSummary.aspx/GetProblems",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{'flag':'" + flag + "'}",
        error: function (data) {
            alert(data.message);
        },
        success: function (result) {
            var data1 = result.d;
            if (data1 != null) {
                var json = eval("(" + data1 + ")");
                $("#hotP_list").children("li").remove();
                $.each(json, function (index, item) {
                    $("#hotP_list").append('<li id="hotP_list_li' + json[index].id + '">' + json[index].title + '<div id="hotP_list_li_div' + index + '">' + json[index].person + '<br/>' + json[index].date + '</div></li>');
                });
                //$(window.parent.document).find(".mainIframe").load(function () {
                var iframeHeight = $(window.parent.document).find(".mainIframe").contents().find("body").height() + 60;
                $(window.parent.document).find(".mainIframe").height(iframeHeight);
                $(window.parent.document).find("#rightDiv").height(iframeHeight + 40);
                $(window.parent.document).find("#contentDiv").height(iframeHeight + 60);
                var a = $(window.parent.document).find(".mainIframe").height();
                var b = $(window.parent.document).find(".rightDiv").height();
                var c = $(window.parent.document).find(".contentDiv").height();
                //});
                $("li").on("click", function () {
                    var id = $(this).attr("id");
                    id = id.substring(12, id.length);
                    window.parent.PageToJump(id);
                    var a = window.parent.$("#oneList1").attr("class");
                });
            }
            else {
                alert("未查询到相应数据！");
            }
        }
    });
}