$(function () {
    //问题类型点击事件
    $(".submitP_type_c").on("click", function () {
        if ($(this).css("background-color") == 'rgb(255, 255, 255)') {
            $(this).css("color", "white");
            $(this).css("background-color", "#808080");
        }
        else if ($(this).css("background-color") == 'rgb(128, 128, 128)'){
            $(this).css("color", "#808080");
            $(this).css("background-color", "white");
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
                                        $('#submit_imgDiv_view1_img').css("display","inline");
                                    }
                                    if (imgFlag == 1) {
                                        $('#submit_imgDiv_view2_img').attr("src", "../../img/uploadImgCache/" + data);
                                        $('#submit_imgDiv_view2_img').css("display", "inline");
                                    }
                                    if (imgFlag == 2) {
                                        $('#submit_imgDiv_view3_img').attr("src", "../../img/uploadImgCache/" + data);
                                        $('#submit_imgDiv_view3_img').css("display", "inline");
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
    $(".submit_imgDiv").on("click",function () {
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
function imgShow(outerdiv, innerdiv, bigimg, _this) {
    var src = $("#"+_this+"_img").attr("src");//获取当前点击的pimg元素中的src属性  
    $("#bigimg", parent.document).attr("src", src.substring(3));//设置#bigimg元素的src属性 

    /*获取当前点击图片的真实大小，并显示弹出层及大图*/
    $("<img/>").attr("src", src).load(function () {
        var windowW = $(window, parent.document).width();//获取当前窗口宽度  
        var windowH = $(window, parent.document).height();//获取当前窗口高度  
        var realWidth = this.width;//获取图片真实宽度  
        var realHeight = this.height;//获取图片真实高度  
        var imgWidth, imgHeight;
        var scale = 0.8;//缩放尺寸，当图片真实宽度和高度大于窗口宽度和高度时进行缩放  

        if (realHeight > windowH * scale) {//判断图片高度  
            imgHeight = windowH * scale;//如大于窗口高度，图片高度进行缩放  
            imgWidth = imgHeight
                / realHeight * realWidth;// 等比例缩放宽度
            if (imgWidth > windowW * scale) {//如宽度扔大于窗口宽度  
                imgWidth = windowW * scale;//再对宽度进行缩放  
            }
        } else if (realWidth > windowW * scale) {//如图片高度合适，判断图片宽度  
            imgWidth = windowW * scale;//如大于窗口宽度，图片宽度进行缩放  
            imgHeight = imgWidth / realWidth * realHeight;// 等比例缩放高度
        } else {//如果图片真实高度和宽度都符合要求，高宽不变  
            imgWidth = realWidth;
            imgHeight = realHeight;
        }
        $("#bigimg", parent.document).css("width", imgWidth);//以最终的宽度对图片缩放  

        var w = (windowW - imgWidth) / 2;// 计算图片与窗口左边距
        var h = (windowH - imgHeight) / 2;// 计算图片与窗口上边距
        $("#innerdiv", parent.document).css({
            "top": h,
            "left": w
        });//设置#innerdiv的top和left属性  
        $("#outerdiv", parent.document).fadeIn("fast");//淡入显示#outerdiv及.pimg  
    });

    $("#outerdiv", parent.document).click(function () {//再次点击淡出消失弹出层  
        $(this).fadeOut("fast");
    });
}