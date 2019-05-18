$(function () {
    //问题类型点击事件
    $(".submitP_type_c").on("click", function () {
        if ($(this).css("background-color") == "rgb(255,255,255)") {
            $(this).css("color", "#808080");
            $(this).css("background-color", "white");
        }
        else {
            $(this).css("color", "white");
            $(this).css("background-color", "#808080");
        }
    });
    //图片上传事件
    $("#submit_imgDiv").on("click",function () {
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
                    imgFlag == 0;
                } else {
                    if (img2 == "" || img2 == null) {
                        imgFlag == 1;
                    }
                    else {
                        imgFlag == 2;
                    }
                }
                if (imgTypeis) {
                    if (upFile.size <= (5 * 1024 * 1024)) {
                        try {
                            var formData = new FormData();
                            formData.append("file", upFile);
                        } catch (e) {
                            alert("您的浏览器版本过低或者浏览器不兼容！请升级版本或尝试使用其他浏览器");
                        }
                        $.ajax({
                            type: "post",
                            url: "../../handler/FileUploadHandler.ashx",
                            //dataType: "json",
                            data: formData,
                            //async: false,
                            contentType: false,
                            processData: false,
                            success: function (msg) {
                                if (imgFlag == 0) {
                                    submit_imgDiv_view1_img = "../img/uploadImg/" + fileName;
                                }
                                if (imgFlag == 1) {
                                    submit_imgDiv_view2_img = "../img/uploadImg/" + fileName;
                                }
                                if (imgFlag == 2) {
                                    submit_imgDiv_view3_img = "../img/uploadImg/" + fileName;
                                }
                                alert("上传成功！");
                            },
                            error: function (erro) {
                                alert("上传失败！");
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
    //页面提交事件
    $(".sumbitButton_div").click(function () {
        var title = $(".titleText_submitP").val();
        var content = $(".contentText_submitP").val();
        var person = $(".impDiv_person").val();
        var department = $(".impDiv_department").val();
        //判断类型
        if (true) {

        }
        if (title && content && person) {
            $.ajax({
                type: "post",
                url: "SubmitProblems.aspx/SubmitClick",
                contentType: "application/json; charset=utf-8",
                data: "{'contents':'" + content + "','personName':'" + person + "','department':'" + department + "','imageUp1':'" + img1 + "','imageUp2':'" + img2 + "','imageUp3':'" + img3 + "'}",
                dataType: "json",
                success: function (msg) {
                    alert("提交成功！");
                    window.location.reload();
                },
                error: function (err) {
                    alert("数据库处理错误，保存失败！");
                }
            });
        } else {
            alert("反馈问题、反馈问题不能为空！");
        }
    });
});