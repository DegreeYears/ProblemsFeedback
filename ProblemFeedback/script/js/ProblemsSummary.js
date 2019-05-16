$(function () {
    $.ajax({
        type: "POST",
        url: "ProblemsSummary.aspx/GetProblems",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: function (data) {
            alert(data.message);
        },
        success: function (result) {
            var data1 = result.d;
            if (data1 != null) {
                var json = eval("(" + data1 + ")");
                $.each(json, function (index, item) {
                    $("#hotP_list").append('<li id="hotP_list_li' + json[index].id + '">' + json[index].title + '<div id="hotP_list_li_div' + index + '">' + json[index].person + '<br/>' + json[index].date + '</div></li>');
                });
                $("li").on("click", function () {
                    var id = $(this).attr("id");
                    id = id.substring(12, id.length);
                    window.parent.PageToJump(id);
                    var a = window.parent.$("#oneList1").attr("class");
                });
            }
            else {
                alert("数据读取失败！");
            }
        }
    });
});