$(function () {
    $("#submitP_type1").css("color", "#808080");
    $("#submitP_type1").css("background-color", "white");
    //问题类型点击事件
    $(".submitP_type_c").on("click", function () {
        if ($(this).css("background-color") == 'rgb(255, 255, 255)') {
            for (var i = 1; i < 6; i++) {
                $("#submitP_type" + i).css("color", "#808080");
                $("#submitP_type" + i).css("background-color", "white");
            }
            $(this).css("color", "white");
            $(this).css("background-color", "#808080");
        }
        else if ($(this).css("background-color") == 'rgb(128, 128, 128)') {
            for (var i = 1; i < 6; i++) {
                $("#submitP_type" + i).css("color", "#808080");
                $("#submitP_type" + i).css("background-color", "white");
            }
            $(this).css("color", "#808080");
            $(this).css("background-color", "white");
        }
    });
    //图片上传事件
    $("#submit_imgDiv").on("click", function () {
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
                            url: 'UploadImage.ashx',
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
    });
    //图片点击查看事件
    $(".submit_imgDiv").on("click", function () {
        if ($(this).css("display") != "none" && $(this).attr("id") != "submit_imgDiv") {
            var _this = $(this).attr("id");
            imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);
        }
    });
    //页面提交事件
    $(".sumbitButton_div").click(function () {
        var title = $(".titleText_submitP").val();
        var content = $(".contentText_submitP").val();
        var person = $(".impDiv_person").val();
        var department = $(".impDiv_department").val();
        var img = {};
        //判断类型
        for (var i = 1; i < 6; i++) {
            if ($("#submitP_type" + i).css("background-color") == 'rgb(128, 128, 128)') {
                var type = $("#submitP_type" + i).children("span").text();
                break;
            }
        }
        for (var i = 1; i < 4; i++) {
            if ($("#submit_imgDiv_view" + i + "_img").attr("src") != "") {
                var src = $("#submit_imgDiv_view" + i + "_img").attr("src");
                img['var_'+i] = src.substring(25,src.length);
            }
            else {
                img['var_' + i] = "";
            }
        }
        var img1 = img['var_1'];
        var img2 = img['var_2'];
        var img3 = img['var_3'];
        if (title!="" && content!="" && person!="") {
            $.ajax({
                type: "post",
                url: "SubmitProblems.aspx/SubmitClick",
                contentType: "application/json; charset=utf-8",
                data: "{'title':'" + title + "','type':'" + type + "','contents':'" + content + "','personName':'" + person + "','department':'" + department + "','imageUp1':'" + img1 + "','imageUp2':'" + img2 + "','imageUp3':'" + img3 + "'}",
                dataType: "json",
                success: function (msg) {
                    if (msg.d == 1) {
                        alert("提交成功！");
                        window.location.reload();
                    }
                    else {
                        alert("数据异常！");
                    }
                },
                error: function (err) {
                    alert("服务器错误！");
                }
            });
        } else {
            alert("标题、反馈内容、姓名不能为空！");
        }
    });
});
//js日期格式转换
function CurentTime() {
    var now = new Date();

    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日

    var clock = year;

    if (month < 10)
        clock += "0";

    clock += month;

    if (day < 10)
        clock += "0";

    clock += day;
    return (clock);
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