<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ProblemsSummary.aspx.cs" Inherits="ProblemFeedback.web.summary.ProblemsSummary" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <link type="text/css" rel="stylesheet" href="../../script/css/ProbelmsSummary.css" />
    <script src="http://libs.baidu.com/jquery/1.11.3/jquery.min.js"></script>
    <script type="text/javascript" src="../../script/js/ProblemsSummary.js"></script>
    <script type="text/javascript">
        
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <div class="mainDiv">
            <div class="pCountDiv">
                <div class="title_pCountDiv">当前模块问题汇总</div>
                <div class="titile_pCountDiv_2">
                    <div class="titile_pCountDiv_2_1">
                        <div><img src="../../img/dd_c2.png" /></div>
                        <div>今日问题：5</div>
                        <div>历史问题：10</div>
                        <div>已解决：4</div>                        
                    </div>   
                    <div class="findDiv">
                        <span>
                            <input type="text" /></span>
                        <img src="../../img/find.png" />
                    </div>
                </div>
            </div>
            <div class="typeDiv">
                <div class="submitP_type0">全部</div>
                <div class="submitP_type1">采购相关</div>
                <div class="submitP_type2">销售相关</div>
                <div class="submitP_type3">生产相关</div>
                <div class="submitP_type4">库存相关</div>
                <div class="submitP_type5">其他问题</div>
                <div class="submitP_type6">已解决</div>
                <div class="submitP_type7">未解决</div>
            </div>
            <div class="listDiv">
                <ul id="hotP_list">

                </ul>
                <%--<div class="listTitle">
                    <div class="listTile1">
                        <select id="select1" class="select">
                            <option value="0">全部</option>
                            <option value="1">未解决</option>
                            <option value="2">已解决</option>
                        </select>
                    </div>
                    <div class="listSelect">
                        <select id="select2" class="select">
                            <option value="0">全部</option>
                            <option value="1">销售相关</option>
                            <option value="2">采购相关</option>
                            <option value="3">生产相关</option>
                            <option value="4">库存相关</option>
                            <option value="5">系统相关</option>
                        </select>
                    </div>
                </div>--%>
                <%-- 显示问题列表 --%>
                <%--<div class="listDiv">
                    <asp:GridView ID="GridView1" runat="server" CellPadding="4" CellSpacing="1" AllowSorting="true" AutoGenerateColumns="false" CssClass="table"
                        ForeColor="#e3e0e0" GridLines="None"  OnRowDeleting="GridView1_RowDeleting">
                        <FooterStyle BackColor="#e3e0e0" Font-Bold="True" ForeColor="White" />
                        <Columns>
                            <asp:BoundField DataField="pInfo" HeaderText="问题相关" ReadOnly="True" ControlStyle-Width="10%"><ItemStyle width="10%" /></asp:BoundField>
                            <asp:BoundField DataField="pContent" HeaderText="问题内容" ><ItemStyle width="50%" /></asp:BoundField>
                            <asp:BoundField DataField="pPerson" HeaderText="提交人" ><ItemStyle width="10%" /></asp:BoundField>
                            <asp:BoundField DataField="pSubmitDate" HeaderText="提交时间" ><ItemStyle width="15%" /></asp:BoundField>
                            <asp:CommandField HeaderText="选择" ShowSelectButton="True" ><ItemStyle width="5%" /></asp:CommandField>
                            <asp:CommandField HeaderText="查看" ><ItemStyle width="5%" /></asp:CommandField>
                            <asp:CommandField HeaderText="删除" ShowDeleteButton="True" ><ItemStyle width="5%" /></asp:CommandField>
                        </Columns>--%>
                        <%-- 每行 --%>
                        <%--<RowStyle ForeColor="black" />--%>
                        <%-- 选中的行样式 --%>
                        <%--<SelectedRowStyle BackColor="#cbc9c9" Font-Bold="false" ForeColor="White" />--%>
                        <%-- 分页 --%>
                        <%--<PagerStyle BackColor="#e3e0e0" ForeColor="#e3e0e0" HorizontalAlign="Left" />--%>
                        <%-- 标题样式 --%>
                       <%-- <HeaderStyle BackColor="#e3e0e0" Font-Bold="false" ForeColor="White" />
                    </asp:GridView>--%>
                <%--</div>--%>
            </div>
        </div>
    </form>
</body>
</html>
