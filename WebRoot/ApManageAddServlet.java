package com.scholarshipsystem.apmanage.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.scholarship.student.model.Year;
import com.scholarshipsystem.student.dao.ApManageDAO;
import com.scholarshipsystem.student.model.ApManage;

public class ApManageAddServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public ApManageAddServlet() {
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
	 * The doPost method of the servlet. <br>
	 * 
	 * This method is called when a form has its tag value method equals to
	 * post.
	 * 
	 * @param request
	 *            the request send by the client to the server
	 * @param response
	 *            the response send by the server to the client
	 * @throws ServletException
	 *             if an error occurred
	 * @throws IOException
	 *             if an error occurred
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("GB2312");
		HttpSession session=request.getSession();
		String account=(String) session.getAttribute("userID");
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
        
        ApManage.addAplication(apmanage);
        
		request.setAttribute("Aplist", ApManage.findAllApManagebyID(account));
        request.getRequestDispatcher("../student/ApManage_show.jsp").forward(request, response);
	}

	/**
	 * Initialization of the servlet. <br>
	 * 
	 * @throws ServletException
	 *             if an error occurs
	 */
	public void init() throws ServletException {
		// Put your code here
	}

}
