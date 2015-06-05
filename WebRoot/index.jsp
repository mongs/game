<%@ page language="java" import="java.util.*" contentType="text/html; charset=utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@taglib prefix="s" uri="/struts-tags"%>
						  
<!DOCTYPE html>
<html lang="zh-Hans">
<head>
	<base href="<%=basePath%>">
	<meta content="IE=Edge" http-equiv="X-UA-Compatible" />
	<meta content="width=device-width, initial-scale=1" name="viewport" />
	<meta charset="utf-8" />
	<meta content="CQUPT, 计算机科学与技术, 网络安全技术对抗赛" name="keywords" />
	<title>重邮网络安全技术对抗赛首页</title>
	<meta http-equiv="keywords" content="重庆邮电大学，信息安全协会比赛">
	<link href="images/cqupt.png" rel="shortcut icon"  />
	<link href="layout.css" media="all" rel="stylesheet" />
	
	<script type="text/javascript" >
	function loads()
	{
	//type1
		var oDiv1 = document.getElementById('div1');
		//problemcopy=document.getElementById('problem-1');
		
		for(var i = 2;i<5;i++)
		{
			var odiv = document.createElement('div');
			var oA = document.createElement('a');
			oA.href = "games/askquestion.action?question_id="+i;
			oA.innerHTML = "p"+i;
			odiv.appendChild(oA);
			oDiv1.appendChild(odiv);
		}
		
	//type2
		var oDiv2 = document.getElementById('div2');
		//problemcopy=document.getElementById('problem-1');
		
		for(var i = 2;i<5;i++)
		{
			var odivs = document.createElement('div');
			var oA2 = document.createElement('a');
			oA2.href = "games/askquestion.action?question_id="+i;
			oA2.innerHTML = "p"+i;
			odivs.appendChild(oA2);
			oDiv2.appendChild(odivs);
		}
		
		
	//type3
		var oDiv3 = document.getElementById('div3');
		//problemcopy=document.getElementById('problem-1');
		
		for(var i = 2;i<5;i++)
		{
			var odiv3 = document.createElement('div');
			var oA3 = document.createElement('a');
			oA3.href = "games/askquestion.action?question_id="+i;
			oA3.innerHTML = "p"+i;
			odiv3.appendChild(oA3);
			oDiv3.appendChild(odiv3);
		}
		
		
		//type4
		var oDiv4 = document.getElementById('div4');
		//problemcopy=document.getElementById('problem-1');
		
		for(var i = 2;i<5;i++)
		{
			var odiv4 = document.createElement('div');
			var oA4 = document.createElement('a');
			oA4.href = "games/askquestion.action?question_id="+i;
			oA4.innerHTML = "p"+i;
			odiv4.appendChild(oA4);
			oDiv4.appendChild(odiv4);
		}
		
			//type5
		var oDiv5 = document.getElementById('div5');
		//problemcopy=document.getElementById('problem-1');
		
		for(var i = 2;i<5;i++)
		{
			var odiv5 = document.createElement('div');
			var oA5 = document.createElement('a');
			oA5.href = "games/askquestion.action?question_id="+i;
			oA5.innerHTML = "p"+i;
			odiv5.appendChild(oA5);
			oDiv5.appendChild(odiv5);
		}
	
	
	}
	</script>
	
</head>
<style>
	#div1 div{
		height:44px;
		width:155px;
		line-height:44px;
		background:green;
		margin-top:2px;
	}
	#div a{
		padding:0;
		margin:0;
		color:#fff;
	}
	
	#div2 div{
		height:44px;
		width:155px;
		line-height:44px;
		background:green;
		margin-top:2px;
	}
	#div2 a{
		padding:0;
		margin:0;
		color:#fff;
	}
	
	#div3 div{
		height:44px;
		width:155px;
		line-height:44px;
		background:green;
		margin-top:2px;
	}
	#div3 a{
		padding:0;
		margin:0;
		color:#000;
	}
	
	#div4 div{
		height:44px;
		width:155px;
		line-height:44px;
		background:green;
		margin-top:2px;
	}
	#div4 a{
		padding:0;
		margin:0;
		color:#fff;
	}
	
	
	#div5 div{
		height:44px;
		width:155px;
		line-height:44px;
		background:green;
		margin-top:2px;
	}
	#div5 a{
		padding:0;
		margin:0;
		color:#000;
	}
	
</style>
<body onload="loads()">
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
					<li><li class=" active"><a href="index.jsp">题目</a></li></li>
					<li><li class=""><a href="games/askgrade">成绩</a></li></li>
					<li><li class=""><a href="notice.jsp">公告</a></li></li>
				</ul>
			</nav>
		</div>
	</aside>

	<main id="problems-index">
		<h1>题目</h1>
		<div class="category category-misc">
			<h2>type1</h2>
			<div class="problems1" id="div1">
				<div>
					<a href = "games/askquestion.action?question_id=1">p1</a>
				</div>
					<!--<div class="problem" id="problem-1"><div class="problem-name">
					<a href="games/askquestion.action?question_id=1">
						p1
					</a></div>
				</div>
			<div class="problem" id="problem-7">
					<a href="games/askquestion.action?question_id=2">
						<div class="problem-name">p2</div>
					</a>
				</div>
				<div class="problem" id="problem-13">
					<a href="problem.jsp">
						<div class="problem-name">p13</div>
					</a>
				</div>
				<div class="problem" id="problem-18">
					<a href="problem.jsp">
						<div class="problem-name">p14</div>
					</a>
				</div>
				<div class="problem" id="problem-19">
					<a href="problem.jsp">
						<div class="problem-name">p15</div>
					</a>
				</div>-->
			</div>
		</div>
		<div class="category category-ppc &amp; crypto">
			<h2>type2</h2>
		<div class="problems2" id="div2">
				<div>
					<a href = "games/askquestion.action?question_id=1">p1</a>
				</div>
					<!--<div class="problem" id="problem-1"><div class="problem-name">
					<a href="games/askquestion.action?question_id=1">
						p1
					</a></div>
				</div>
			<div class="problem" id="problem-7">
					<a href="games/askquestion.action?question_id=2">
						<div class="problem-name">p2</div>
					</a>
				</div>
				<div class="problem" id="problem-13">
					<a href="problem.jsp">
						<div class="problem-name">p13</div>
					</a>
				</div>
				<div class="problem" id="problem-18">
					<a href="problem.jsp">
						<div class="problem-name">p14</div>
					</a>
				</div>
				<div class="problem" id="problem-19">
					<a href="problem.jsp">
						<div class="problem-name">p15</div>
					</a>
				</div>-->
			</div>
		</div>
		<div class="category category-pwn">
			<h2>type3</h2>
		<div class="problems3" id="div3">
				<div>
					<a href = "games/askquestion.action?question_id=1">p1</a>
				</div>
					<!--<div class="problem" id="problem-1"><div class="problem-name">
					<a href="games/askquestion.action?question_id=1">
						p1
					</a></div>
				</div>
			<div class="problem" id="problem-7">
					<a href="games/askquestion.action?question_id=2">
						<div class="problem-name">p2</div>
					</a>
				</div>
				<div class="problem" id="problem-13">
					<a href="problem.jsp">
						<div class="problem-name">p13</div>
					</a>
				</div>
				<div class="problem" id="problem-18">
					<a href="problem.jsp">
						<div class="problem-name">p14</div>
					</a>
				</div>
				<div class="problem" id="problem-19">
					<a href="problem.jsp">
						<div class="problem-name">p15</div>
					</a>
				</div>-->
			</div>
		</div>
		<div class="category category-reverse">
			<h2>type4</h2>
			<div class="problems4" id="div4">
				<div>
					<a href = "games/askquestion.action?question_id=1">p1</a>
				</div>
					<!--<div class="problem" id="problem-1"><div class="problem-name">
					<a href="games/askquestion.action?question_id=1">
						p1
					</a></div>
				</div>
			<div class="problem" id="problem-7">
					<a href="games/askquestion.action?question_id=2">
						<div class="problem-name">p2</div>
					</a>
				</div>
				<div class="problem" id="problem-13">
					<a href="problem.jsp">
						<div class="problem-name">p13</div>
					</a>
				</div>
				<div class="problem" id="problem-18">
					<a href="problem.jsp">
						<div class="problem-name">p14</div>
					</a>
				</div>
				<div class="problem" id="problem-19">
					<a href="problem.jsp">
						<div class="problem-name">p15</div>
					</a>
				</div>-->
			</div>
		</div>
		
		<div class="category category-reverse">
			<h2>type5</h2>
			<div class="problems5" id="div5">
				<div>
					<a href = "games/askquestion.action?question_id=1">p1</a>
				</div>
					<!--<div class="problem" id="problem-1"><div class="problem-name">
					<a href="games/askquestion.action?question_id=1">
						p1
					</a></div>
				</div>
			<div class="problem" id="problem-7">
					<a href="games/askquestion.action?question_id=2">
						<div class="problem-name">p2</div>
					</a>
				</div>
				<div class="problem" id="problem-13">
					<a href="problem.jsp">
						<div class="problem-name">p13</div>
					</a>
				</div>
				<div class="problem" id="problem-18">
					<a href="problem.jsp">
						<div class="problem-name">p14</div>
					</a>
				</div>
				<div class="problem" id="problem-19">
					<a href="problem.jsp">
						<div class="problem-name">p15</div>
					</a>
				</div>-->
			</div>
		</div>
		<!-- <div class="category category-web">
			<h2>P5</h2>
			<div class="problems5">
				<div class="problem" id="problem-3">
					<a href="problem.jsp">
						<div class="problem-name">p51</div>
					</a>
				</div>
				<div class="problem" id="problem-8">
					<a href="problem.jsp">
						<div class="problem-name">p52</div>
					</a>
				</div>
				<div class="problem" id="problem-12">
					<a href="problem.jsp">
						<div class="problem-name">p53</div>
					</a>
				</div>
				<div class="problem" id="problem-21">
					<a href="problem.jsp">
						<div class="problem-name">p54</div>
					</a>
				</div>
				<div class="problem" id="problem-26">
					<a href="problem.jsp">
						<div class="problem-name">p55</div>
					</a>
				</div>
			</div>
		</div> -->
	</main>

	<script src="application.js"></script>
	<!--[if lt IE 9]>
	<script src="ie-9.js">
	</script>
	<script src="html5shiv.js">
	</script>
	<![endif]-->
</body>
</html>