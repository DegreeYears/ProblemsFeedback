$(function () {
    
    //页面提交事件
    $(".submit").click(function () {
        var content = $(".text").val();
        var person = $(".submitB").val();
        var department = $(".submitD").val();
        var img1 = $(".imageUp1").attr('src');
        var img2 = $(".imageUp2").attr('src');
        var img3 = $(".imageUp3").attr('src');
        if (content && person) {
            $.ajax({
                type: "post",
                url: "SubmitSell.aspx/SubmitClick",
                contentType: "application/json; charset=utf-8",
                data: "{'contents':'" + content + "','personName':'" + person + "','department':'" + department + "','imageUp1':'" + img1 + "','imageUp2':'" + img2 + "','imageUp3':'" + img3+"'}",
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
    //图片上传事件
    $(".imgUploadBtn").click(function () {
        var pathName = $(".fileUpload").val();
        var fileName = pathName.replace(/^.+?\\([^\\]+?)(\.[^\.\\]*?)?$/gi, "$1");
        var fileType = pathName.replace(/.+\./, "");
        var imgType = new Array("gif", "jpg", "png", "bpm");
        var img1 = $("#imageUp1").attr('src');
        var img2 = $("#imageUp2").attr('src');
        var img3 = $("#imageUp3").attr('src');
        var imgTypeis = 0;
        var imgFlag = 0;
        //获得文件对象
        var upFile = $(".fileUpload")[0].files[0];
        if (fileName == "" || fileName == null || pathName == "../../img/imgIn.png") {
            alert("上传文件不能为空！");
        }
        else {
            if (img3 == "" || img3 == null || img3 == "../../img/imgIn.png") {
                for (var i = 0; i < imgType.length; i++) {
                    if (fileType == imgType[i]) {
                        imgTypeis = 1;
                    }
                }
                if (img1 == "" || img1 == null || img1 == "../../img/imgIn.png") {
                    imgFlag == 0;
                } else {
                    if (img2 == "" || img2 == null || img2 == "../../img/imgIn.png") {
                        imgFlag == 1;
                    }
                    else {
                        imgFlag == 2;
                    }
                }
                if (imgTypeis) {
                    if (upFile.size <= (5 * 1024 * 1024)) {
                        var formData = new FromData($("#form1")[0]);
                        $.ajax({
                            type: "post",
                            url: "SubmitSell.aspx/ImgUploadBtnClick",
                            contentType: "application/json; charset=utf-8",
                            //data: "{'upFile':'"+upFile+"'}",
                            data: formData,
                            //dataType: "json",
                            processData: false,
                            contentType: false,
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
                    alert("图片格式不正确！");
                }
            }
            else {
                alert("图片上传上限为3！");
            }
        }
    });
});