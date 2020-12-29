package com.example.coding_dojo.counter;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import javax.servlet.http.HttpSession;
import org.springframework.ui.Model;

@Controller
public class CounterController {
	@RequestMapping("/")
	public String index(HttpSession session) {
		if(session.getAttribute("count") != null) {
			Integer count = (Integer) session.getAttribute("count");
			count++;
			session.setAttribute("count", count);
		}
		else {
			session.setAttribute("count", 0);	
			Integer count = (Integer) session.getAttribute("count");
			count++;
			session.setAttribute("count", count);
		}
		return "index.jsp";
	}
	@RequestMapping("/counter")
	public String counter(HttpSession session) {
		if(session.getAttribute("count") != null) {
			Integer count = (Integer) session.getAttribute("count");
			session.setAttribute("count", count);
		}
		else {
			session.setAttribute("count", 0);	
			Integer count = (Integer) session.getAttribute("count");
			session.setAttribute("count", count);
		}
		return "counter.jsp";
	}
}
