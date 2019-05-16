<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="HotProblems.aspx.cs" Inherits="ProblemFeedback.web.hot.HotProblems" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>热门问题</title>
    <script src="http://libs.baidu.com/jquery/1.11.3/jquery.min.js"></script>
    <link href="../../script/css/HotProblems.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="../../script/js/HotProblems.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div class="mainDiv_hotP">
            <div class="titleDiv_hotP">
                <img src="../../img/panel_black.png"/>
                <span>热点问题</span>
            </div>
            <ul id="hotP_list">
            </ul>
        </div>
    </form>
</body>
</html>
