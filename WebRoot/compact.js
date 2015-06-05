
//处理提交key的请求，不使用jquery
var xmlhttp;

function createXMLHttp() {
	if (window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	} else {
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
}
//提交key函数
function submitkeys(question_id) {
	var key=document.getElementById("questionkey").value;
	
	if(key.length<1){
		alert("提交key非法");
	}
	else{
	var question_id=question_id;
	alert("请确认提交key为："+key);
	createXMLHttp();
	xmlHttp.open("POST", "games/commitkey.action?question_id="+question_id+"&question_key="+key);
	// 设置操作的回调函数
	xmlHttp.onreadystatechange = submitkeysCallback;
	xmlHttp.send(null);
	}
	
	
	
}


function submitkeysCallback() {

	if (xmlHttp.readyState == 4) {
		// 调用完成
		if (xmlHttp.status == 200) {

			var text = xmlHttp.responseText;
			document.getElementById("key_information").innerHTML = text;
			
		}
	}

}