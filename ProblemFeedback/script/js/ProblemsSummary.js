$(function () {
    $.ajax({
        type: "POST",
        url: "ProblemsSummary.aspx/GetProblems",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: function (data) {
            alert(data.message);
        },
        success: function (result) {
            var data1 = result.d;
            var json = eval("(" + data1 + ")");

            $.each(json, function (index, item) {
                //var li = $("<li value=" + data[index] + ">" + data[item] + "</li>");
                //li.appendTO("#hotP_list");
                $("#hotP_list").append('<li id="hotP_list_li' + index + '">' + json[index].title + '<div id="hotP_list_li_div' + index + '">' + json[index].person +'<br/>'+ json[index].date+'</div></li>');
            });
        }
    });
});
    //$(".select").change(function () {
    //    var index1 = $("#select1").val();//解决状态 index
    //    var index2 = $("#select2").val();//问题种类 index
    //    var text1 = $("#select1").text();//解决状态 text
    //    var text2 = $("#select2").text();//问题种类 text
    //    $.ajax({
    //        type: "post",
    //        url: "ProblemsSummary.aspx/SelectChange1",
    //        contentType: "application/json; charset=utf-8",
    //        data: "{'index1':'" + index1 + "','index2':'" + index2 + "','text1':'" + text1 + "','text2':'" + text2 + "'}",
    //        dataType: "json",
    //        success: function (msg) {
    //            //window.location.reload();
    //        },
    //        error: function (err) {
    //            var errStr = err;
    //        }
    //    });
    //});
//$(function () {
//    $("#select2").change(function () {
//        var index = $(this).val();//index
//    });
//});