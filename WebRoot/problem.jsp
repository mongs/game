<%@ page language="java" import="java.util.*" contentType="text/html; charset=utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<%@taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html>
<html lang="zh-Hans">
<head>
	<base href="<%=basePath%>">
	<meta content="IE=Edge" http-equiv="X-UA-Compatible" />
	<meta content="width=device-width, initial-scale=1" name="viewport" />
	<meta charset="utf-8" />
	<meta content="CQUPT, 计算机科学与技术, 网络安全技术对抗赛" name="keywords" />
	<title>重邮网络安全技术对抗赛题目</title>
	<link href="images/cqupt.png" rel="shortcut icon"  />
	<link href="layout.css" media="all" rel="stylesheet" />
	<script type="text/javascript" src="compact.js"></script>
</head>

<style>
.subbtn{ padding:3px 12px; background:#04B5AF; color:#fff; border-radius:3px; box-shadow:0 1px 1px #ddd;cursor:pointer;border:0px;border-bottom-style:none;border-top-style:none;border-left-style:none;border-right-style:none;}
</style>
<body>
	<aside id="sidebar">
		<div class="masthead">
			<div class="cup">「重邮网络安全技术对抗赛」</div>
			<a class="logo" href="http://www.cqupt.edu.cn"></a>
			<div class="motto">论剑安全 决战巅峰</div>
		</div>
		<div class="container">
			<div class="map"></div>
			<div class="binary-runner"></div>
			<nav id="nav">
				<ul class="links">
					<li><li class="active"><a href="index.jsp">题目</a></li></li>
					<li><li class=""><a href="games/askgrade">成绩</a></li></li>
					<li><li class=""><a href="notice.jsp">公告</a></li></li>
				</ul>
			</nav>
		</div>
	</aside>

<!-- <p>这张页面是问题描述，有多少问题就加载多少次，java我不知道是怎么解决的，php是写个函数，当触发事件，就显示对应的问题题号和问题内容，实现跳转......</p> -->
	<main id="problems-show">
		<h1>题目编号:<s:property value="#request.question.question_id" /></h1>
		<h3>分值：<s:property value="#request.question.question_grade"/></h3>
		<h3>描述：</h3>
		<div class="problem-description">
			<s:property value="#request.question.question_content"/>
		</div>
		<strong><hr /></strong>
		
		<h4>key:<input type="text" id="questionkey"/> &nbsp &nbsp<input type="button" value="提交" onclick="submitkeys('${question.question_id}')"
		style="border:none;width:60px;height:40px"
		class="subbtn"
		/></h4>
		<h5>正误:<p id="key_information"></p></h5>
		
	</main>
	<script src="application.js">
	</script>
	<!--[if lt IE 9]>
	<script src="ie-9.js">
	</script>
	<script src="html5shiv.js">
	</script>
	<![endif]-->
</body>
</html>