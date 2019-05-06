$(function () {
    //页面提交事件
    $(".submit").click(function () {
        var content = $(".text").val();
        var person = $(".submitB").val();
        var department = $(".submitD").val();
        var img1 = $(".imageUp1").url();
        var img2 = $(".imageUp2").url();
        var img3 = $(".imageUp3").url();
        if (content && person) {
            $.ajax({
                type: "post",
                url: "SubmitSell.aspx/SubmitClick",
                contentType: "application/json; charset=utf-8",
                data: "{'contents':'content','personName':'person','department':'department','imageUp1':'img1','imageUp2':'img2','imageUp3':'img3'}",
                dataType: "json",
                success: function (msg) {
                    alert("提交成功！");
                    $(".text").val() = null;
                    $(".submitB").val() = null;
                    $(".submitD").val() = null;
                    $(".imageUp1").url() = "";
                    $(".imageUp2").url() = "";
                    $(".imageUp3").url() = "";
                },
                error: function (err) {
                    alert("数据库处理错误，保存失败！");
                    console.log(err);
                }
            });
        } else {
            alert("反馈问题、反馈问题不能为空！");
        }
    });
    //图片上传事件
    $(".imgUploadBtn").click(function () {
        var fileName = $(".fileName").fileName();
        var fileType = System.IO.Path.GetExtension(fileName).ToLower();
        var imgType = new Array(".gif", ".jpg", ".png", ".bpm");
        var img1 = $(".imageUp1").url();
        var img2 = $(".imageUp2").url();
        var img3 = $(".imageUp3").url();
        var imgTypeis = flase;
        var imgFlag = 0;
        var upFile = $(".fileName").files[0];
        if (fileName == "" || fileName == null) {
            alert("上传文件不能为空！");
        }
        else {
            if ((img1 == "" || img1 == null) && (img2 == "" || img2 == null) && (img3 == "" || img3 == null)) {
                for (var i = 0; i < imgType.Length; i++) {
                    if (fileType == imgType[i]) {
                        imgTypeis = true;
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
                    if ($(".fileName").size() <= (5 * 1024 * 1024)) {
                        $.ajax({
                            type: "post",
                            url: "SubmitSell.aspx/ImgUploadBtnClick",
                            contentType: "application/json; charset=utf-8",
                            data: "{'upFile':'upFile'}",
                            dataType: "json",
                            success: function (msg) {
                                if (imgFlag == 0) {
                                    img1 = "../img/uploadImg/" + fileName;
                                }
                                if (imgFlag == 1) {
                                    img2 = "../img/uploadImg/" + fileName;
                                }
                                if (imgFlag == 2) {
                                    img3 = "../img/uploadImg/" + fileName;
                                }
                                alert("上传成功！");
                            },
                            error: function (err) {
                                alert("上传失败！");
                            }
                        });
                    }
                    else {
                        alert("上传文件不能大于5M！");
                    }
                }
                else {
                    alert("图片格式不正确！");
                }
            }
            else {
                alert("图片上传上限为3！");
            }
        }
    });
});