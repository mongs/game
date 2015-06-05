<%@ page language="java" import="java.util.*" contentType="text/html; charset=utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>
<html lang="zh-Hans">
<head>
	<base href="<%=basePath%>">
	<meta content="IE=Edge" http-equiv="X-UA-Compatible" />
	<meta content="width=device-width, initial-scale=1" name="viewport" />
	<meta charset="utf-8" />
	<meta content="CQUPT, 计算机科学与技术, 网络安全技术对抗赛" name="keywords" />
	<title>重邮网络安全技术对抗赛公告</title>
	<link href="images/cqupt.png" rel="shortcut icon"  />
	<link href="layout.css" media="all" rel="stylesheet" />
</head>
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
					<li><li class=""><a href="index.jsp">题目</a></li></li>
					<li><li class=""><a href="games/askgrade">成绩</a></li></li>
					<li><li class=""><a href="notice.jsp">公告</a></li></li>
				</ul>
			</nav>
		</div>
	</aside>

	<main id="problems-show">
		<h1>比赛规则</h1>
		<div class="problem-description">
			<p>不许抽烟！不许打架！不许作弊！不许打电话！不许上厕所！不许不许不许！！！！</p>
			<p>规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则1</p>
			<p>规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则2</p>
			<p>规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则3</p>
		</div>
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