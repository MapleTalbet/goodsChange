//页面加载后自动执行
$(function() {
	getData();
});
var subMit;
// 获取以提交的商品数据列表
function getData() {
	$.ajax({
		url : "/item/getExchange",
		type : "get",
		dataType : "text",
		data:{
			"type":"submit"
		},
		success : function(data) {// data为后台返回的json字符串内容为已提交订单(类ExcData.java)的列表，通过JSON.parse解析
			subMit = JSON.parse(data);
			showData();
		},
		erro : function() {
			alert("服务器炸了");
		}
	});
}

var num = 7;

// 将json数据添加到网页
function showData() {
	var json = {};
	var box = $(".all-data");// 用以显示数据的容器
	var load = $(".loadbox");// 显示加载按钮的容器
	box.empty();
	load.empty();

	for (var j = 0; j < num; j++) {
		if (subMit[j] == null) {// 当列表遍历完后显示提示信息
			box
					.append("<div class='tips' style='color:white;text-align: center;'>已无更多信息</div>");
			return;
		}
		if (j % 2 == 0) {
			var e = "<div class='order' style='background-color: #d8f3f5;height:120px;float:left;width:100%;margin-bottom:20px;'>"
					+ "<div class='col-sm-6 col-md-4'><img style='width:100px;height:90px;' src=/"
					+ subMit[j].img_a
					+ ">"
					+ "<div class='gname'>我的<a href='/item/itemid="
					+ subMit[j].gid_a
					+ "'>"
					+ subMit[j].gname_a
					+ "</a></div>"
					+ "</div>"
					+ "<div class='col-sm-6 col-md-4'><img style='width:100px;height:90px;' src=/"
					+ subMit[j].img_b
					+ ">"
					+ "<div class='gname'>别人的<a href='/item/itemid="
					+ subMit[j].gid_b
					+ "'>"
					+ subMit[j].gname_b
					+ "</a></div>"
					+ "</div>"
					+ "<div class='eid' id='eid'>单号："
					+ subMit[j].excId
					+ "</div>"
					+ "<div class='eDate'>提交时间："
					+ subMit[j].excDate
					+ "</div>"
					+ "<div class='eInfo'>备注信息："
					+ subMit[j].info + "</div>"
					+"<button onclick=cancel('"+subMit[j].excId+"') >取消</button>"
			" </div>"
		} else {
			var e = "<div class='order' style='background-color: #fdfde8;height:120px;float:left;width:100%;margin-bottom:20px;'>"
					+ "<div class='col-sm-6 col-md-4'><img style='width:100px;height:90px;' src=/"
					+ subMit[j].img_a
					+ ">"
					+ "<div class='gname'>我的<a href='/item/itemid="
					+ subMit[j].gid_a
					+ "'>"
					+ subMit[j].gname_a
					+ "</a></div>"
					+ "</div>"
					+ "<div class='col-sm-6 col-md-4'><img style='width:100px;height:90px;' src=/"
					+ subMit[j].img_b
					+ ">"
					+ "<div class='gname'>别人的<a href='/item/itemid="
					+ subMit[j].gid_b
					+ "'>"
					+ subMit[j].gname_b
					+ "</a></div>"
					+ "</div>"
					+ "<div class='eid' id='eid'>单号："
					+ subMit[j].excId
					+ "</div>"
					+ "<div class='eDate'>提交时间："
					+ subMit[j].excDate
					+ "</div>"
					+ "<div class='eInfo'>备注信息："
					+ subMit[j].info + "</div>"
					+"<button onclick=cancel('"+subMit[j].excId+"') >取消</button>"
			" </div>"
		}

		box.append(e);
	}
	if (num < subMit.length) {
		load
				.append("<a href='javascript:onload()'><div class='load' style='color=white;text-align: center;'>加载更多...</div></a>");
	}
}

function cancel(excId){
	aaa("2017122710253371134");
	alert(excId);
	$.ajax({
		url:"/item/removeExc",
		type:"get",
		dataType:"text",
		data:{
			"excId":excId
		},
		success:function(data){
			if(data=="SUCCESS"){
				getData();
			}else alert(data);
		},
		erro:function(){
			alert("服务器异常");
		}
	});
}
function aaa(a){
	alert("a="+a);
}
// 加载更多数据
function onload() {
	num += 5;
	showData();
}
