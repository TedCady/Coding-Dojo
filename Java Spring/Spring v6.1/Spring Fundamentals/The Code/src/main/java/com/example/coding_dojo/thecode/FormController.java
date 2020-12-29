package com.example.coding_dojo.thecode;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class FormController {
	@RequestMapping(value="/submit", method=RequestMethod.POST)
	public String tryCode(@RequestParam(value="code") String code) {
		String theCode = "bushido";
		if(code.matches(theCode)) {
			return "redirect:/code";
		}
		else {
			return "redirect:/createError";
		}
	}
}
