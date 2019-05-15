$(function () {
    $.ajax({
        type: "POST",
        url: "HotProblems.aspx/GetHotProblems",
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
                $("#hotP_list").append('<li id=' + json[index].name + '>' + json[index].value + '<img id="hotP_list_img" /></li>');
            });
        }
    });
});