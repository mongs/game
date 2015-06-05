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

public class ApManageServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public ApManageServlet() {
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
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		ApManageDAO apManage=new ApManageDAO();
		ApManage ApManage=new ApManage();
		HttpSession session=request.getSession();
       
		String action=request.getParameter("action");
		String SID=request.getParameter("SID");
		String account=(String) session.getAttribute("userID");
			
		if(action.equals("delete")){
			ApManage=apManage.findApManagebySID(SID);
			request.setAttribute("ApManage",ApManage);
			request.setAttribute("action",action+"1");
	        request.getRequestDispatcher("../student/ApManage_Warning.jsp").forward(request, response);
		}
		if(action.equals("delete1")){
			apManage.delAplication(SID);			
			request.setAttribute("Aplist", apManage.findAllApManagebyID(account));
			request.getRequestDispatcher("../student/ApManage_show.jsp").forward(request, response);
		}
		
		
		if(action.equals("up")){
			ApManage=apManage.findApManagebySID(SID);
			
			
			if(ApManage.getStateName().equals("未提交")){
			  request.setAttribute("ApManage",ApManage);
			  request.setAttribute("action",action+"1");
	          request.getRequestDispatcher("../student/ApManage_Warning.jsp").forward(request, response);        
			  }	
			else{
				
				request.setAttribute("Info",new String("此申请书已提交!"));
			    request.getRequestDispatcher("../student/warning.jsp").forward(request, response);
			    }
			}
			
		if(action.equals("up1")){
			apManage.setAplication(SID, "0102");
			request.setAttribute("Aplist", apManage.findAllApManagebyID(account));
			request.getRequestDispatcher("../student/ApManage_show.jsp").forward(request, response);
			
		}
		
		
		
		
	  }

	/**
	 * The doPost method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to post.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
	{
	
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
