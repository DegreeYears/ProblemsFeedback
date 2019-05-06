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
                问题反馈平台
            </div>
            <div id="contentDiv">
                <div id="leftDiv">
                    <ul id="menuUl" class="MenuUl">
                        <li class="menuList"><span class="oneList" >反馈提交</span>
                            <ul class="oneListUl" id="sub1">
                                <li class="SubmitSellLi" id="销售相关"><a href="#">销售相关</a></li>
                                <li class="SubmitPurchaseLi" id="采购相关"><a href="#">采购相关</a></li>
                                <li class="SubmitProductLi" id="生产相关"><a href="#">生产相关</a></li>
                                <li class="SubmitInventLi" id="库存相关"><a href="#">库存相关</a></li>
                                <li class="SubmitSystemLi" id="系统相关"><a href="#">系统相关</a></li> 
                            </ul>
                        </li>
                        <li class="menuList"><span class="oneList">反馈解决</span>
                            <ul class="oneListUl" id="sub2">
                                <li><a href="#">销售相关</a></li>
                                <li><a href="#">采购相关</a></li>
                                <li><a href="#">生产相关</a></li>
                                <li><a href="#">库存相关</a></li>
                                <li><a href="#">系统相关</a></li> 
                            </ul>
                        </li>
                        <li class="menuList"><span class="oneList" >反馈汇总</span>
                            <ul class="oneListUl" id="sub3">
                                <li><a href="#">销售相关</a></li>
                                <li><a href="#">采购相关</a></li>
                                <li><a href="#">生产相关</a></li>
                                <li><a href="#">库存相关</a></li>
                                <li><a href="#">系统相关</a></li> 
                            </ul>
                        </li>
                        <li class="menuList"><span class="oneList">其他反馈</span>
                            <ul class="oneListUl" id="sub4">
                                <li><a href="#">销售相关</a></li>
                                <li><a href="#">采购相关</a></li>
                                <li><a href="#">生产相关</a></li>
                                <li><a href="#">库存相关</a></li>
                                <li><a href="#">系统相关</a></li> 
                            </ul>
                        </li>
                    </ul>
                </div>
                <div id="rightDiv">
                    <iframe class="mainIframe" runat="server" src="submit/SubmitSell.aspx" frameborder="0" scrolling="no" allowtransparency="yes"></iframe>
                </div>
            </div>
        </div>
    </form>
</body>
</html>
