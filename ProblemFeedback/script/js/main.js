$(function () {
    //导航栏划过效果
    $(".menuList").children("span").hover(function () {
        if ($(this).css("background-color") == 'rgb(238,82,54)') {
        } else {
            $(this).css("color", "#DE3812");
        }
    }, function () {
        $(this).css("color", "white");
    });
    //导航栏点击效果
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
            $('.mainIframe').attr('src', 'submit/SubmitProblems.aspx');
        }
        if ($(this).attr("id") == "oneList3") {
            $('.mainIframe').attr('src', 'resolve/ResolveProblems.aspx?id=0');
        }
        if ($(this).attr("id") == "oneList4") {
            $('.mainIframe').attr('src', 'summary/ProblemsSummary.aspx');
        }
        if ($(this).attr("id") == "oneList5") {
            $('.mainIframe').attr('src', 'others/OthersProblems.aspx');
        }
    });
    //页面高度自适应
    $(".mainIframe").on("load", function () {
        var iframeHeight = $(".mainIframe").contents().find("body").height() + 60;
        $(".mainIframe").height(iframeHeight);
        $("#rightDiv").height(iframeHeight + 40);
        $("#contentDiv").height(iframeHeight + 60);
    });
    //主页搜索实现
    $(".titleFindImg").on("click", function () {
        if ($(".titleFindText").val() = "") {
            alert("搜索内容为空！");
        }
        else {
            var str1 = "热门排行";
            var str2 = "提交问题反馈问题";
            var str3 = "解答问题解决问题";
            var str4 = "问题列表问题汇总所有问题查找";
            var str5 = "其他";
            var reg = new RegExp($(".titleFindText").val());
            if (reg.test(str1)) {

            } else if (reg.test(str2)) {

            } else if (reg.test(str3)) {

            } else if (reg.test(str4)) {

            } else if (reg.test(str5)) {

            }
        }
    });
});
//子页面调用该方法 实现页面跳转
function PageToJump(id) {
    for (var i = 1; i < 6; i++) {
        $("#oneList" + i).css("background-color", "#26212f");
    }
    $("#oneList3").css("background-color", "#ee5236");
    $("#oneList3").css("color", "white");
    $('.mainIframe').attr('src', 'resolve/ResolveProblems.aspx?id=' + id);
}
