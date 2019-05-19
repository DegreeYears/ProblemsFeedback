<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="SubmitProblems.aspx.cs" Inherits="ProblemFeedback.web.submit.SubmitProblems" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>反馈问题</title>
    <link type="text/css" rel="stylesheet" href="../../script/css/ProblemsSubmit.css" />
    <script src="http://libs.baidu.com/jquery/1.11.3/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/jquery-form/form@4.2.2/dist/jquery.form.min.js"></script>
    <script type="text/javascript" src="../../script/js/ProblemsSubmit.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div class="mainDiv">
            <div class="titleDiv">
                <input class="titleText_submitP" placeholder="请输入问题的简单描述或者标题" maxlength="35" />
            </div>
            <div class="pTypeDiv">
                <div class="submitP_typetitle">请选择问题类型</div>
                <div class="submitP_type_c" id="submitP_type1"><span>采购相关</span></div>
                <div class="submitP_type_c" id="submitP_type2"><span>销售相关</span></div>
                <div class="submitP_type_c" id="submitP_type3"><span>生产相关</span></div>
                <div class="submitP_type_c" id="submitP_type4"><span>库存相关</span></div>
                <div class="submitP_type_c" id="submitP_type5"><span>其他问题</span></div>
            </div>
            <div class="contentDiv">
                <textarea class="contentText_submitP" placeholder="请描述遇到的问题或者建议" name="内容" maxlength="500" onchange="this.value=this.value.substring(0, 500)" onkeydown="this.value=this.value.substring(0, 500)" onkeyup="this.value=this.value.substring(0, 500)"></textarea>
            </div>
            <div class="imgDiv">
                <input type="file" id="file" name="file" runat="server" />
                <div class="sumbit_imgDiv_title"><a>上传图片(0/3)</a></div>
                <div class="submit_imgDiv" id="submit_imgDiv">
                    <img src="../../img/jia_c1.png" /></div>
                <div class="submit_imgDiv" id="submit_imgDiv_view1">
                    <img id="submit_imgDiv_view1_img" src="" /></div>
                <div class="submit_imgDiv" id="submit_imgDiv_view2">
                    <img id="submit_imgDiv_view2_img" src="" /></div>
                <div class="submit_imgDiv" id="submit_imgDiv_view3">
                    <img id="submit_imgDiv_view3_img" src="" /></div>
            </div>
            <div class="impDiv">
                <input class="impDiv_person" placeholder="您的姓名" maxlength="6" />
                <input class="impDiv_department" placeholder="您所在的部门 " maxlength="10" />
                <div class="sumbitButton_div">我要提交</div>
            </div>
        </div>
    </form>
</body>
</html>
