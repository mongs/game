package com.scholarshipsystem.apmanage.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.scholarshipsystem.student.dao.ApManageDAO;
import com.scholarshipsystem.student.model.ApManage;

public class ApManageUpdateServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public ApManageUpdateServlet() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	/**
	 * The doGet method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to get.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
        
		request.setCharacterEncoding("GB2312");
		HttpSession session=request.getSession();
		//int SID=Integer.parseInt((String)session.getAttribute("SID"));
		
		String account=(String) session.getAttribute("userID");
		String SID=session.getAttribute("SID").toString();
		
		
		ApManageDAO ApManage=new ApManageDAO();
		String title=request.getParameter("Title");
		String year=(String)request.getParameter("year");
		String courseCode=(String)request.getParameter("courseCode");		
		String scholarshipType=request.getParameter("scholarshipType");
		String ApContent=request.getParameter("ApContent");
		
		
		
        ApManage apmanage=new ApManage(); 
        apmanage.setS_StClassName(courseCode);
        apmanage.setYears(year);
        apmanage.setApTitle(title);
        apmanage.setTypeName(scholarshipType);
        apmanage.setApContent(ApContent);
        apmanage.setStateName("0101");
        apmanage.setStu_account(account);
        
        ApManage.updAplication(apmanage, SID);
        
		request.setAttribute("Aplist", ApManage.findAllApManagebyID(account));
		
		session.setAttribute("SID","");
		
        request.getRequestDispatcher("../student/ApManage_show.jsp").forward(request, response);

	}



	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occurs
	 */
	public void init() throws ServletException {
		// Put your code here
	}

}
