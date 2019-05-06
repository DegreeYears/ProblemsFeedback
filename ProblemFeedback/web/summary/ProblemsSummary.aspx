<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ProblemsSummary.aspx.cs" Inherits="ProblemFeedback.web.summary.ProblemsSummary" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div class="mainDiv">
            <div class="pCountDiv">
                <%-- 显示问题总数，已解决问题数，模糊查询问题 --%>
                问题总数：<a></a>
                已解决：<a></a>
                <input type="text"/>
                <img src="../../img/imgIn.png"/>
            </div>
            <div>
                <%-- 显示问题列表 --%>
            </div>
        </div>
    </form>
</body>
</html>
