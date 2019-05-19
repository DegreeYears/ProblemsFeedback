<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ProblemsSummary.aspx.cs" Inherits="ProblemFeedback.web.summary.ProblemsSummary" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <link type="text/css" rel="stylesheet" href="../../script/css/ProbelmsSummary.css" />
    <script src="http://libs.baidu.com/jquery/1.11.3/jquery.min.js"></script>
    <script type="text/javascript" src="../../script/js/ProblemsSummary.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div class="mainDiv">
            <div class="pCountDiv">
                <div class="title_pCountDiv">当前模块问题汇总</div>
                <div class="titile_pCountDiv_2">
                    <div class="titile_pCountDiv_2_1">
                        <div><img src="../../img/dd_c2.png" /></div>
                        <div class="titile_pCountDiv_2_1_1">今日问题：5</div>
                        <div class="titile_pCountDiv_2_1_2">历史问题：10</div>
                        <div class="titile_pCountDiv_2_1_3">已解决：4</div>                        
                    </div>   
                    <div class="findDiv">
                        <span>
                            <input type="text" maxlength="35" placeholder="搜索"/></span>
                        <img src="../../img/find.png" />
                    </div>
                </div>
            </div>
            <div class="typeDiv">
                <div class="submitP_type1">全部</div>
                <div class="submitP_type2">采购相关</div>
                <div class="submitP_type3">销售相关</div>
                <div class="submitP_type4">生产相关</div>
                <div class="submitP_type5">库存相关</div>
                <div class="submitP_type6">其他问题</div>
                <div class="submitP_type7">已解决</div>
                <div class="submitP_type8">未解决</div>
            </div>
            <div class="listDiv">
                <ul id="hotP_list">
                </ul>
            </div>
        </div>
    </form>
</body>
</html>
