$(function () {
    $('.menuList').click(function () {
        $(this).children('ul').slideDown();
        $(this).siblings().children('ul').slideUp();
    });
    //iframe页面跳转 动态修改页面
    //可优化
    //已优化
    $('.oneListUl').children('li').click(function () {
        var name = $(this).attr('id');
        //$('.mainIframe').attr('src', 'submit/' + name + '.aspx');
        $('.mainIframe').attr('src', 'submit/SubmitSell.aspx');
        //监听iframe异步资源加载
        $('.mainIframe').load(function () {
           $(this).contents().find(".titleDiv").html(name + "问题反馈");
        });
    });
    //滑过变色
    $('.oneListUl').children('li').hover(function () {
        $(this).children('a').css('color', '#cbc9c9');
        $(this).css('background-color', 'white');
    }, function () {
            $(this).css('background-color', '#cbc9c9');
            $(this).children('a').css('color', 'white');
        });
});