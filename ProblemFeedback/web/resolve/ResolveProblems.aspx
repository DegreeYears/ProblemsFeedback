<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ResolveProblems.aspx.cs" Inherits="ProblemFeedback.web.resolve.ResolveProblems" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <link type="text/css" rel="stylesheet" href="../../script/css/ResolveProblems.css"/>
    <script src="http://libs.baidu.com/jquery/1.11.3/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/jquery-form/form@4.2.2/dist/jquery.form.min.js"></script>
    <script type="text/javascript" src="../../script/js/ResolveProblems.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div class="mainDiv">
            <div class="problemDiv">
                <div class="problem_titleDiv">
                    <div class="problem_titleDiv_1">我是问题标题</div>
                    <div class="problem_titleDiv_2">
                        <div class="problem_titleDiv_2_left">宁怡哲</div>
                        <div class="problem_titleDiv_2_right">
                            <div class="problem_titleDiv_2_left_3"><img src="../../img/huifu_h1.png"/><span>已解决</span></div>
                            <div class="problem_titleDiv_2_left_2"><img src="../../img/liulan_count_h1.png"/><span>10</span></div>
                            <div class="problem_titleDiv_2_left_1">2019-05-15</div>
                        </div>
                    </div>
                </div>
                <div class="problem_contentDiv">
                    <p>
                        我是问题详细描述
                    </p>
                </div>
                <div class="problem_imgDiv">
                    <div class="problem_imgDiv_img" id="problem_imgDiv_img_1"><img id="problem_imgDiv_img_1_img" src=""/></div>
                    <div class="problem_imgDiv_img" id="problem_imgDiv_img_2"><img id="problem_imgDiv_img_2_img" src=""/></div>
                    <div class="problem_imgDiv_img" id="problem_imgDiv_img_3"><img id="problem_imgDiv_img_3_img" src=""/></div>
                </div>
                <div class="problem_buttonDiv">
                    <div class="problem_buttonDiv_btn">我来解决</div>
                </div>
            </div>
            <div class="resolveDiv">
                <div class="c_resolveDiv">
                    <div class="resolve_contentDiv">
                        <textarea class="contentText_submitP" placeholder="请描述解决问题的方法或者建议" name="内容"></textarea>
                    </div>
                    <div class="resolve_imgDiv">
                        <input type="file" id="file" name="file" runat="server" />
                        <div class="sumbit_imgDiv_title"><a>上传图片(0/3)</a></div>
                        <div class="submit_imgDiv" id="submit_imgDiv">
                            <img src="../../img/jia_c1.png" />
                        </div>
                        <div class="submit_imgDiv" id="submit_imgDiv_view1">
                            <img id="submit_imgDiv_view1_img" src="" /></div>
                        <div class="submit_imgDiv" id="submit_imgDiv_view2">
                            <img id="submit_imgDiv_view2_img" src="" /></div>
                        <div class="submit_imgDiv" id="submit_imgDiv_view3">
                            <img id="submit_imgDiv_view3_img" src="" /></div>
                    </div>
                    <div class="resolve_btnDiv">
                        <div>发表回复</div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</body>
</html>
