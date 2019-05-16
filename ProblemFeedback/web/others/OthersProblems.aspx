<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="OthersProblems.aspx.cs" Inherits="ProblemFeedback.web.others.OthersProblems" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>其他反馈</title>
    <script src="http://libs.baidu.com/jquery/1.11.3/jquery.min.js"></script>
    <link href="../../script/css/OthersProblems.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="../../script/js/OthersProblems.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div class="mainDiv_othersP">
            <span>其他疑问</span><br/>
            <textarea class="contentText_others" placeholder="假如您有其他疑问或者系统问题和建议，您可以在此反馈给我们，当然我们也非常乐意倾听你的吐槽和不愉快..." name="内容"maxlength="500" onchange="this.value=this.value.substring(0, 500)" onkeydown="this.value=this.value.substring(0, 500)" onkeyup="this.value=this.value.substring(0, 500)"></textarea>
            <div class="mainDiv_othersP_btn">提交疑问</div>
        </div>
    </form>
</body>
</html>
