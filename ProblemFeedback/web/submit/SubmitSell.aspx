<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="~/web/submit/SubmitSell.aspx.cs" Inherits="ProblemFeedback.web.SubmitSell" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <link type="text/css" rel="stylesheet" href="../../script/css/Submit.css"/>
    <script src="http://libs.baidu.com/jquery/1.11.3/jquery.min.js"></script>
    <script type="text/javascript" src="../../script/js/SubmitSell.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div class="mainDiv">
            <div class="titleDiv">
                <%-- 父页面动态修改 --%>销售相关问题反馈
            </div>
            <div class="contentDiv">
                <span class="span">问题:</span>
                <textarea class="text" name ="内容"></textarea>
            </div>
            <div class="imgDiv">
                <span class="span">相关截图提交:</span>
                <div>
                    <input type="file" id="fileUpload" class="fileUpload"/>
                    <input type="button" id="imgUploadBtn" class="imgUploadBtn" value="上传图片"/><br />
                    <img src="../../img/imgIn.png" id="imageUp1" />
                    <img src="../../img/imgIn.png" id="imageUp2"/>
                    <img src="../../img/imgIn.png" id="imageUp3"/>
                 </div>
            </div>
            <div class="impDiv">
                提交人员:<input class="submitB" id="submitB" type="text" name="提交人员"/><br/>
                部门职位:<input class="submitD" id="submitD" type="text" name="部门职位"/><br/>
                <input class="submit" type="button" id="submitBtn" value="提交" />
            </div>
        </div>
    </form>
</body>
</html>
