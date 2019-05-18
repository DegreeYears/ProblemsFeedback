$(function () {
    var id = getQueryStr();
    UpdateView(id);
    $(".c_resolveDiv").hide();
    $(".problem_buttonDiv_btn").on("click", function () {
        var btn_v = $(".problem_buttonDiv_btn").html();
        if (btn_v == "我来解决" || btn_v == "已解决" || btn_v == "显示") {
            $(".problem_buttonDiv_btn").html("隐藏");
            $(".c_resolveDiv").slideDown(1000);
        }
        else {
            $(".problem_buttonDiv_btn").html("显示");
            $(".c_resolveDiv").slideUp(1000);
        }
    });
});
//更新页面的函数
function UpdateView(id) {
    $.ajax({
        type: "POST",
        url: "ResolveProblems.aspx/UpdateView",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{'id':'" + id + "'}",
        error: function (data) {
            alert(data.message);
        },
        success: function (result) {
            var data1 = result.d;
            if (data1 != null) {
                var json = eval("(" + data1 + ")");
                $.each(json, function (index, item) {
                    if (json[0].flag == 1) {
                        $(".problem_titleDiv_1").html(json[index].title);
                        $(".problem_titleDiv_2_left").html(json[index].person);
                        if (json[index].resolve == 1) {
                            $(".problem_titleDiv_2_left_3").children("span").html("已解决");
                        }
                        else if (json[index].resolve == 0) {
                            $(".problem_titleDiv_2_left_3").children("span").html("未解决");
                        }
                        $(".problem_titleDiv_2_left_2").children("span").html(json[index].hotvalue);
                        $(".problem_titleDiv_2_left_1").html((json[index].date).substring(0, 9));
                        $(".contentText_submitP").val(json[index].r_content);
                        $(".contentText_submitP").attr("readonly", true)
                        $(".problem_contentDiv").html(json[index].content);
                        //$("#problem_imgDiv_img_1").attr("src",json[index].image1);
                        //$("#problem_imgDiv_img_2").attr("src", json[index].image2);
                        //$("#problem_imgDiv_img_3").attr("src",json[index].image3);
                        //$("#submit_imgDiv_view1").html(json[index].title);
                        //$("#submit_imgDiv_view2").html(json[index].title);
                        //$("#submit_imgDiv_view3").html(json[index].title);
                    }
                    else if (json[0].flag == 2){
                        $(".problem_titleDiv_1").html(json[index].title);
                        $(".problem_titleDiv_2_left").html(json[index].person);
                        if (json[index].resolve == 1) {
                            $(".problem_titleDiv_2_left_3").children("span").html("已解决");
                        }
                        else if (json[index].resolve == 0) {
                            $(".problem_titleDiv_2_left_3").children("span").html("未解决");
                        }
                        $(".problem_titleDiv_2_left_2").children("span").html(json[index].hotvalue);
                        $(".problem_titleDiv_2_left_1").html((json[index].date).substring(0,9));
                        $(".problem_contentDiv").html(json[index].content);

                        //$("#problem_imgDiv_img_1").attr("src",json[index].image1);
                        //$("#problem_imgDiv_img_2").attr("src", json[index].image2);
                        //$("#problem_imgDiv_img_3").attr("src",json[index].image3);
                    }
                });
            }
            else {
                alert("数据读取失败！");
            }
        }
    });
}
//解析url
function getQueryStr() {
    var args = location.search;
    var arg = args.split("=");
    return arg[1];
} 
