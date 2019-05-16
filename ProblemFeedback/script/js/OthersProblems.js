$(function () {
    $(".mainDiv_othersP_btn").click(function () {
        var content_othersP = $(".contentText_others").val();
        var pcontent_l = $(".contentText_others").val().length;
        if (content_othersP.length) {
            $.ajax({
                type: "POST",
                url: "OthersProblems.aspx/SubmitOthersProblems",
                data: "{'content_othersP':'" + content_othersP + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                error: function (data) {
                    //日志记录异常
                    alert("提交异常！");
                },
                success: function (result) {
                    if (result.d == 1) {
                        alert("提交成功！");
                    }
                    else {
                        alert("数据异常！");
                    }
                }
            }); 
        }
        else {
            alert("问题内容不能为空！");
        }
    })
});