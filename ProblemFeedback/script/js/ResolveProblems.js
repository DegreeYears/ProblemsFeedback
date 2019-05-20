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
    $(".submit_imgDiv").on("click", function () {
        if ($(this).css("display") != "none" && $(this).attr("id") != "submit_imgDiv") {
            var _this = $(this).attr("id");
            imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);
        }
    });
    $(".problem_imgDiv_img").on("click", function () {
        if ($(this).css("display") != "none") {
            var _this = $(this).attr("id");
            imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);
        }
    });
    //解决提交
    $('.resolve_btnDiv').on("click", function () {
        if ($('.resolve_btnDiv').css("display") != "none") {
            var content = $(".contentText_submitP").val();
            var img = {};
            for (var i = 1; i < 4; i++) {
                if ($("#submit_imgDiv_view" + i + "_img").attr("src") != "") {
                    var src = $("#submit_imgDiv_view" + i + "_img").attr("src");
                    img['var_' + i] = src.substring(25, src.length);
                }
                else {
                    img['var_' + i] = "";
                }
            }
            var img1 = img['var_1'];
            var img2 = img['var_2'];
            var img3 = img['var_3'];
            if (content != "") {
                $.ajax({
                    type: "POST",
                    url: "ResolveProblems.aspx/SubmitResolve",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: "{'id':'" + id + "','content':'" + content + "','imageUp1':'" + img1 + "','imageUp2':'" + img2 + "','imageUp3':'" + img3 + "'}",
                    error: function (data) {
                        alert("服务器错误！");
                    },
                    success: function (result) {
                        if (result.d == 1) {
                            alert("提交成功！");
                            window.location.reload();
                        }
                        else {
                            alert("数据异常！");
                        }
                    }
                });
            }
            else {
                alert("解决内容不能为空！");
            }
        }
    });
    //图片上传事件
    $("#submit_imgDiv").on("click", function () {
        if ($('.resolve_btnDiv').css("display") != "none") {
            $("#file").click();
            var pathName = $("#file").val();
            var fileName = pathName.replace(/^.+?\\([^\\]+?)(\.[^\.\\]*?)?$/gi, "$1");
            var fileType = pathName.replace(/.+\./, "");
            var imgType = new Array("gif", "jpg", "png", "bpm");
            var img1 = $("#submit_imgDiv_view1_img").attr('src');
            var img2 = $("#submit_imgDiv_view2_img").attr('src');
            var img3 = $("#submit_imgDiv_view3_img").attr('src');
            var imgTypeis = 0;
            var imgFlag = 0;
            //获得文件对象
            var upFile = $("#file")[0].files[0];
            if (fileName == "" || fileName == null) {
                alert("上传文件不能为空！");
            }
            else {
                if (img3 == "" || img3 == null) {
                    for (var i = 0; i < imgType.length; i++) {
                        if (fileType == imgType[i]) {
                            imgTypeis = 1;
                            break;
                        }
                    }
                    if (img1 == "" || img1 == null) {
                        imgFlag = 0;
                    } else {
                        if (img2 == "" || img2 == null) {
                            imgFlag = 1;
                        }
                        else {
                            imgFlag = 2;
                        }
                    }
                    if (imgTypeis) {
                        if (upFile.size <= (5 * 1024 * 1024)) {
                            $("#form1").ajaxSubmit({
                                url: 'ResolveUploadImage.ashx',
                                success: function (data) {
                                    if (data != "上传失败") {
                                        if (imgFlag == 0) {
                                            $('#submit_imgDiv_view1_img').attr("src", "../../img/uploadImgCache/" + data);
                                            $('#submit_imgDiv_view1_img').css("display", "inline");
                                            $('.sumbit_imgDiv_title').children("a").text("上传图片(1/3)");
                                        }
                                        if (imgFlag == 1) {
                                            $('#submit_imgDiv_view2_img').attr("src", "../../img/uploadImgCache/" + data);
                                            $('#submit_imgDiv_view2_img').css("display", "inline");
                                            $('.sumbit_imgDiv_title').children("a").text("上传图片(2/3)");
                                        }
                                        if (imgFlag == 2) {
                                            $('#submit_imgDiv_view3_img').attr("src", "../../img/uploadImgCache/" + data);
                                            $('#submit_imgDiv_view3_img').css("display", "inline");
                                            $('.sumbit_imgDiv_title').children("a").text("上传图片(3/3)");
                                        }
                                        alert("上传成功！")
                                    }
                                    else {
                                        alert("上传失败！");
                                    }
                                }
                            });
                        }
                        else {
                            alert("上传文件不能大于5M！");
                        }
                    }
                    else {
                        alert("图片格式不正确！仅支持PNG|PIF|JPG|BPM");
                    }
                }
                else {
                    alert("图片上传上限为3！");
                }
            }
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
                        if (json[index].image1 != "") {
                            $("#problem_imgDiv_img_1").children("img").attr("src", "../../img/uploadImg/" + json[index].image1);
                            $('#problem_imgDiv_img_1_img').css("display", "inline");
                        }
                        if (json[index].image2 != "") {
                            $("#problem_imgDiv_img_2").children("img").attr("src", "../../img/uploadImg/" + json[index].image2);
                            $('#problem_imgDiv_img_2_img').css("display", "inline");
                        }
                        if (json[index].image3 != "") {
                            $("#problem_imgDiv_img_3").children("img").attr("src", "../../img/uploadImg/" + json[index].image3);
                            $('#problem_imgDiv_img_3_img').css("display", "inline");
                        }
                        if (json[index].r_image1 != "") {
                            $("#submit_imgDiv_view1").children("img").attr("src", "../../img/uploadImg/" + json[index].r_image1);
                            $('#submit_imgDiv_view1_img').css("display", "inline");
                        }
                        if (json[index].r_image2 !="") {
                            $("#submit_imgDiv_view2").children("img").attr("src", "../../img/uploadImg/" + json[index].r_image2);
                            $('#submit_imgDiv_view2_img').css("display", "inline");
                        }
                        if (json[index].r_image3 !="") {
                            $("#submit_imgDiv_view3").children("img").attr("src", "../../img/uploadImg/" + json[index].r_image3);
                            $('#submit_imgDiv_view3_img').css("display", "inline");
                        }
                        $('.resolve_btnDiv').css("display", "none");
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
                        if (json[index].image1 != "") {
                            $("#problem_imgDiv_img_1").children("img").attr("src", "../../img/uploadImg/" + json[index].image1);
                            $('#problem_imgDiv_img_1_img').css("display", "inline");
                        }
                        if (json[index].image2 != "") {
                            $("#problem_imgDiv_img_2").children("img").attr("src", "../../img/uploadImg/" + json[index].image2);
                            $('#problem_imgDiv_img_2_img').css("display", "inline");
                        }
                        if (json[index].image3 != "") {
                            $("#problem_imgDiv_img_3").children("img").attr("src", "../../img/uploadImg/" + json[index].image3);
                            $('#problem_imgDiv_img_3_img').css("display", "inline");
                        }
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
//图片预览
function imgShow(outerdiv, innerdiv, bigimg, _this) {
    var src = $("#" + _this + "_img").attr("src");
    $("#bigimg", parent.document).attr("src", src.substring(3));

    $("<img/>").attr("src", src).load(function () {
        var windowW = $(window, parent.document).width();
        var windowH = $(window, parent.document).height();
        var realWidth = this.width;
        var realHeight = this.height;
        var imgWidth, imgHeight;
        var scale = 0.8;//缩放尺寸，当图片真实宽度和高度大于窗口宽度和高度时进行缩放  

        if (realHeight > windowH * scale) {
            imgHeight = windowH * scale;
            imgWidth = imgHeight
                / realHeight * realWidth;// 等比例缩放宽度
            if (imgWidth > windowW * scale) {
                imgWidth = windowW * scale;
            }
        } else if (realWidth > windowW * scale) {
            imgWidth = windowW * scale;
            imgHeight = imgWidth / realWidth * realHeight;
        } else {//如果图片真实高度和宽度都符合要求，高宽不变  
            imgWidth = realWidth;
            imgHeight = realHeight;
        }
        $("#bigimg", parent.document).css("width", imgWidth);//以最终的宽度对图片缩放  

        var w = (windowW - imgWidth) / 2;
        var h = (windowH - imgHeight) / 2;
        $("#innerdiv", parent.document).css({
            "top": h,
            "left": w
        });//设置#innerdiv的top和left属性  
        $("#outerdiv", parent.document).fadeIn("fast");
    });

    $("#outerdiv", parent.document).click(function () {
        $(this).fadeOut("fast");
    });
}
