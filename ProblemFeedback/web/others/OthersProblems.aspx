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
            <textarea class="contentText_others" placeholder="填写其他疑问" name="内容"maxlength="500"></textarea>
            <div class="mainDiv_othersP_btn">提交疑问</div>
        </div>
    </form>
</body>
</html>
