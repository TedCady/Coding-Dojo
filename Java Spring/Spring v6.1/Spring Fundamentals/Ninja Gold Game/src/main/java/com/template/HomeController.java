package com.template;

import java.util.ArrayList;
import java.util.Date;
import java.util.Random;
import java.text.SimpleDateFormat;
import org.springframework.ui.Model;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpSession;

@Controller
public class HomeController {
	@RequestMapping("/")
	public String index(HttpSession session) {
		if(session.isNew()) {
			ArrayList<String> activities = new ArrayList<String>();
			session.setAttribute("goldCount", 0);
			session.setAttribute("activities", activities);
		}
		return "index.jsp";
	}
	@RequestMapping("/findGold")
	public String findGold(HttpSession session, @RequestParam("actionChosen") String action, Model model) {
		
//		Get session values
		Integer goldCount = (Integer) session.getAttribute("goldCount");
		ArrayList<String> activities = (ArrayList<String>) session.getAttribute("activities");
		
//		Set variables
		Random randy = new Random();
		SimpleDateFormat date = new SimpleDateFormat("MMMM d YYYY h:mm aa");
		String currentDate = " (" + date.format(new Date()) + ")";
		String earnOrLose = null;
		String upDown = null;
		int earnLose = 100;
		int goldGen = 0;
		int min = 0;
		int max = 0;
//		Do the ol' razzle-dazzle
		if(action.contentEquals("farm")) {
			min  = 10;
			max = 20;
			goldGen = randy.nextInt(max);
		}
		else if(action.contentEquals("cave")) {
			min = 5;
			max = 10;
			goldGen = randy.nextInt(max);
		}
		else if(action.contentEquals("house")) {
			min = 2;
			max = 5;
			goldGen = randy.nextInt(max);
		}
		else if(action.contentEquals("casino")) {
			min = 0;
			max = 50;
			goldGen = randy.nextInt(max);
			earnLose = randy.nextInt(100);
		}
		while(goldGen < min) {
			goldGen = randy.nextInt(max);
		}
		if(earnLose >= 50) {
			goldCount += goldGen;
			earnOrLose = " earned ";
			upDown = "+";
		}
		else {
			goldCount -= goldGen;
			earnOrLose = " lost ";
		}
		
//		Values to session
		activities.add("You entered a " + action + " and" + earnOrLose + goldGen + " gold." + currentDate);		
		session.setAttribute("goldCount", goldCount);
		session.setAttribute("activities", activities);
		return "redirect:/";
	}
}
