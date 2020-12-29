package dojo.java.pac.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import dojo.java.pac.model.Category;
import dojo.java.pac.model.Product;
import dojo.java.pac.repo.CRepo;
import dojo.java.pac.repo.PRepo;
import dojo.java.pac.service.CServ;
import dojo.java.pac.service.PServ;

@Controller
@RequestMapping("/")
public class _Controller {
	private final PServ pServ;
	private final CServ cServ;
	private final PRepo pRepo;
	private final CRepo cRepo;
	
	public _Controller(PServ pServ, CServ cServ, PRepo pRepo, CRepo cRepo) {
		this.pServ = pServ;
		this.cServ = cServ;
		this.pRepo = pRepo;
		this.cRepo = cRepo;
	}

	@RequestMapping("")
	private String redirectIndex() {
		return "redirect:/dashboard";
	}
	
	@RequestMapping("/dashboard")
	private String index( 
		Model m
	) {
			List<Product> prodOut = pServ.retrieveAll();
			List<Category> catOut = cServ.retrieveAll();
			m.addAttribute("pList", prodOut);
			m.addAttribute("cList", catOut);
			m.addAttribute("lazy", "index");
			return "dashboard.jsp";
	}
	@RequestMapping("/new/product")
	public String newProduct(@ModelAttribute("p") Product p, Model m) {
		m.addAttribute("lazy", "newP");
		return "dashboard.jsp";
	}
	@RequestMapping("/newP")
	public String processNewProduct(@Valid @ModelAttribute("p") Product p, BindingResult result, Model m) {
		if(result.hasErrors()) {
			return "dashboard.jsp";
		}
		else {
			pServ.create(p);
			return "redirect:/";
		}
	}	
	@RequestMapping("/new/category")
	public String newProduct(@ModelAttribute("p") Category p, Model m) {
		m.addAttribute("lazy", "newC");
		return "dashboard.jsp";
	}
	@RequestMapping("/newC")
	public String processNewProduct(@Valid @ModelAttribute("p") Category p, BindingResult result, Model m) {
		if(result.hasErrors()) {
			return "dashboard.jsp";
		}
		else {
			cServ.create(p);
			return "redirect:/";
		}
	}
	@RequestMapping("/add/category/{id}")
	public String addCategory(@PathVariable("id") Long id, Model m) {
		Product p = pServ.retrieve(id);
		List<Category> cats = cRepo.findAll();
		m.addAttribute("cList", cats);
		m.addAttribute("pList", p);
		m.addAttribute("lazy", "addC");
		return "dashboard.jsp";
	}
	@RequestMapping("/addC/{id}")
	public String processCategory(@RequestParam("p") Long c, @PathVariable("id") Long id, Model m) {
		Product prod = pServ.retrieve(id);
		List<Category> cats = prod.getCategories();
		Category cat = cServ.retrieve(c);
		cats.add(cat);
		pRepo.save(prod);
		m.addAttribute("lazy", "addC");
		return "redirect:/add/category/{id}";
	}
	@RequestMapping("/add/product/{id}")
	public String addProduct(@PathVariable("id") Long id, Model m) {
		Category c = cServ.retrieve(id);
		List<Product> prods = pRepo.findAll();
		m.addAttribute("pList", prods);
		m.addAttribute("cList", c);
		m.addAttribute("lazy", "addP");
		return "dashboard.jsp";
	}
	@RequestMapping("/addP/{id}")
	public String processProduct(@RequestParam("p") Long p, @PathVariable("id") Long id, Model m) {
		Category cat = cServ.retrieve(id);
		List<Product> prods = cat.getProducts();
		Product prod = pServ.retrieve(p);
		prods.add(prod);
		cRepo.save(cat);
		m.addAttribute("lazy", "addP");
		return "redirect:/add/product/{id}";
	}
}
