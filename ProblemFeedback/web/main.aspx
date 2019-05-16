<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="main.aspx.cs" Inherits="ProblemFeedback.web.main" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>问题反馈平台</title>
    <script src="http://libs.baidu.com/jquery/1.11.3/jquery.min.js"></script>
    <link href="../script/css/main.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="../script/js/main.js"></script>
</head>
<body>
    <form id="mainForm" runat="server">
        <div id="mainDiv">
            <div id="titleDiv">
                <img class="titleDiv_titleLogo" src="../img/talk.png"/>
                <span>问题反馈平台</span> 
                <div class="titleFindDiv">
                    <input class="titleFindText" placeholder="搜索话题" />
                    <img  class="titleFindImg" src="../img/find.png" />
                </div>
            </div>
            <div id="contentDiv">
                <div id="leftDiv">
                    <ul id="menuUl" class="MenuUl">
                        <li class="menuList"><span class="oneList" id="oneList1">热门问题</span></li>
                        <li class="menuList"><span class="oneList" id="oneList2">我有问题</span></li>
                        <li class="menuList"><span class="oneList"id="oneList3">我来解决</span></li>
                        <li class="menuList"><span class="oneList" id="oneList4">问题汇总</span></li>
                        <li class="menuList"><span class="oneList"id="oneList5">其他疑问</span>
                        </li>
                    </ul>
                </div>
                <div id="rightDiv">
                    <iframe class="mainIframe" name="iframe" runat="server" src="hot/HotProblems.aspx" frameborder="0" scrolling="no" allowtransparency="yes"></iframe>
                </div>
            </div>
        </div>
    </form>
</body>
</html>
