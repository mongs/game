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
	<title>异常错误界面</title>
	<meta content="IE=Edge" http-equiv="X-UA-Compatible" />
	<meta content="width=device-width, initial-scale=1" name="viewport" />
	<meta charset="utf-8" />
	<meta content="CQUPT, 计算机科学与技术, 网络安全技术对抗赛" name="keywords" />
	<title>重邮网络安全技术对抗赛</title>
	<link href="images/cqupt.png" rel="shortcut icon"  />
	<link href="layout.css" media="all" rel="stylesheet" />
</head>
<body>
	<s:fielderror fieldName="gradeerrors"></s:fielderror>
	<s:actionerror/>
	<s:actionmessage/>
</body>
</html>