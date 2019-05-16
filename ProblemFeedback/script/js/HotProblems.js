$(function () {
    //向后台请求读取热点问题
    $.ajax({
        type: "POST",
        url: "HotProblems.aspx/GetHotProblems",
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
                    $("#hotP_list").append('<li class=' + json[index].name + ' id=' + '"li_id_' + json[index].id + '">' + json[index].value + '<img id="hotP_list_img" /></li>');
                });
                $(".pTitle").on("click", function () {
                    var id = $(this).attr("id");
                    id = id.substring(6,id.length);
                    window.parent.PageToJump(id);
                    var a=window.parent.$("#oneList1").attr("class");
                });
            }
            else {
                alert("数据读取失败！");
            }
        }
    });
});