//翻页
$(document).ready(function () {
    var count = 12;
    $("#test").page({
        count: 12,
        pageSize: 3,
        skipPart: true
    });
    $(document).on('click', '#test .pagination_search', function () {
        if ($(document).find("#test .pagination_change_page").val() == "") {
            alert("跳转页码不能为空");
        } else {
            var num = parseInt($(document).find("#test .pagination_change_page").val());
            $("#test").page({
                count: 12,
                pageNo: num,
                pageSize: 3,
                skipPart: true
            });
        }
    });
    $(document).on("click", "#test .pagination li", function () {
        var num = $(this).attr("num");
        if ($(this).attr("class") == "disabled") {
            return false;
        }
        if (num == 0 || num == (count + 1)) {} else {
            $("#test").page({
                count: 12,
                pageNo: num,
                pageSize: 3,
                skipPart: true
            });
        }
    });
})