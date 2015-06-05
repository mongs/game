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
  <title>重邮网络安全技术对抗赛统计分数</title>
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
          <li><li class="active"><a href="games/askgrade">成绩</a></li></li>
          <li><li class=""><a href="notice.jsp">公告</a></li></li>
        </ul>
      </nav>
    </div>
  </aside>

  <main id="scoreboards-index">
    <h1>成绩排名</h1>
    <table class="scoreboard">
      <!--<thead>
        <tr>
          <th>排名</th>
          <th>名称</th>
          <th>得分</th>
          <th class="progress">解题情况<small>（绿色表示已解决的题目，灰色表示未解决的题目）</small></th>
        </tr>
      </thead>
      <tbody>
        <!-- 这里是题号对应的名称 数字11对应题目名称：p11；12== p12 类推-->
       <!--  <script>s={};ps=[[11,"p11"],[12,"p12"],[13,"p13"],[14,"p14"],[15,"p15"],[21,"p21"],[22,"p22"],[23,"p23"],[24,"p24"],[25,"p25"],[31,"p31"],[32,"p32"],[33,"p33"],[34,"p34"],[35,"p35"],[36,"p36"],[41,"p41"],[42,"p42"],[43,"p43"],[44,"p44"],[45,"p45"],[46," p46"],[51,"p51"],[52,"p52"],[53,"p53"],[54,"p54"],[55,"p55"]]
        </script>
        <tr>
          <td class="rank">1</td>
          <td class="name">张三</td>
          <td class="score">400</td>
          <!-- 这里的数字数组是 对应成功破解获得Key的题号，没有就表示没解决 
          <td><script>s[0]=[11, 12, 14, 15, 23, 22, 44, 45, 36, 24, 21, 33, 51, 52, 31, 32, 46, 41, 34, 53]</script></td>
        </tr>
        <tr>
          <td class="rank">2</td>
          <td class="name">王五</td>
          <td class="score">340</td>
          <td><script>s[1]=[14, 15, 21, 11, 22, 13, 32, 31, 43, 41, 54, 34, 36, 12, 46, 52, 23]</script></td>
        </tr>
        <tr>
          <td class="rank">3</td>
          <td class="name">李四</td>
          <td class="score">280</td>
          <td><script>s[2]=[11, 13, 24, 14, 23, 21, 35, 15, 33, 45, 55, 46, 25, 31]</script></td>
        </tr>
        <tr>
          <td class="rank">4</td>
          <td class="name">赵六</td>
          <td class="score">260</td>
          <td><script>s[3]=[11, 26, 14, 23, 13, 15, 22, 24, 33, 44, 12, 45, 31]</script></td>
        </tr>
        <tr>
          <td class="rank">5</td>
          <td class="name">王二</td>
          <td class="score">240</td>
          <td><script>s[4]=[11, 12, 13, 36, 14, 24, 22, 23, 44, 42, 25, 15]</script></td>
        </tr>
        <tr>
          <td class="rank">6</td>
          <td class="name">田七</td>
          <td class="score">160</td>
          <td><script>s[5]=[11, 14, 13, 36, 25, 22, 21, 23]</script></td>
        </tr>
        <tr>
          <td class="rank">7</td>
          <td class="name">季九</td>
          <td class="score">120</td>
          <td><script>s[6]=[11, 23, 36, 44, 15, 52]</script></td>
        </tr> -->
		<tr>

				<s:iterator id="single" value="#request.list"  status="lists">
				<s:if test="#lists.Odd">
					用户ip：<s:property value="single"/>;
				</s:if>
				<s:if test="#lists.Even">
					用户分数：<s:property value="single"/>
						<br />
				</s:if>
				
			</s:iterator>
			
		</tr>
      </tbody>
    </table>
    <script type="text/javascript">(function() {
      document.addEventListener('DOMContentLoaded', function() {
        $('.score + td').each(function(i, el) {
          var a, f, id, name, p, _i, _len;
          f = document.createDocumentFragment();
          for (_i = 0, _len = ps.length; _i < _len; _i++) {
            p = ps[_i];
            id = p[0], name = p[1];
            a = document.createElement('a');
            if (s[i].indexOf(+id) === -1) {
              a.setAttribute('class', 'problem-item');
            } else {
              a.setAttribute('class', 'problem-item solved');
            }
            a.title = name;
            f.appendChild(a);
          }
          return el.appendChild(f);
        });
      });
    }).call(this);
    </script>
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

