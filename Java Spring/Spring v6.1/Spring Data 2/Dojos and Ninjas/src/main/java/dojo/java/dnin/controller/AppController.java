package dojo.java.dnin.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import dojo.java.dnin.model.Dojo;
import dojo.java.dnin.model.Ninja;
import dojo.java.dnin.service.DojoService;
import dojo.java.dnin.service.NinjaService;

@Controller
@RequestMapping("/")
public class AppController {
	private final DojoService dS;
	private final NinjaService nS;
	public AppController(DojoService dS, NinjaService nS) {
		this.dS = dS;
		this.nS = nS;
	}

	@RequestMapping("")
	public String index(@ModelAttribute("dojo") Dojo s, @ModelAttribute("ninja") Ninja n, Model m) {
		List<Dojo> d = dS.allDojos();
		m.addAttribute("dojos", d);
		return "dashboard.jsp";
	}
	
	@RequestMapping(value="/dojos/new", method=RequestMethod.POST)
	public String newDojo(@Valid @ModelAttribute("dojo") Dojo s, BindingResult r) {
		if(r.hasErrors()) {
			return "dashboard.jsp";
		}
		else {
			dS.createDojo(s);
			return "redirect:/";							
		}
	}
	@RequestMapping(value="/dojos/{id}", method=RequestMethod.GET)
	public String newDojo(@PathVariable("id") Long id, Model m, Dojo d) {
			d = dS.findDojo(id);
			List<Ninja> n = nS.ninjaByDojo(id);
			m.addAttribute("dojo", d);
			m.addAttribute("ninjas", n);
			return "show.jsp";							
	}
	@RequestMapping(value="/ninjas/new", method=RequestMethod.POST)
	public String newDojo(@Valid @ModelAttribute("ninja") Ninja n, BindingResult r) {
		if(r.hasErrors()) {
			return "dashboard.jsp";
		}
		else {
			nS.createNinja(n);
			return "redirect:/";							
		}
	}
}
