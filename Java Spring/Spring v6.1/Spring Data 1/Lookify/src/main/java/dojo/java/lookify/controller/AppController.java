package dojo.java.lookify.controller;

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

import dojo.java.lookify.model.Song;
import dojo.java.lookify.service.SongService;

@Controller
public class AppController {
	private final SongService s;	
	public AppController(SongService s) {
		this.s = s;
	}
	@RequestMapping("/")
	public String reIndex() {
		return "index.jsp";
	}
	@RequestMapping("/dashboard")
	public String index(Model m) {
		List<Song> S = s.allSongs();
		m.addAttribute("s", false);
		m.addAttribute("Songs", S);
		return "dashboard.jsp";
	}
//	CREATE
	@RequestMapping("/songs/new")
	public String showNew(@ModelAttribute("song") Song s) {
		return "new.jsp";
	}
	@RequestMapping(value="/songs", method=RequestMethod.POST)
	public String create(@Valid @ModelAttribute("song") Song L, BindingResult result) {
		if(result.hasErrors()) {
			return "new.jsp";
		}
		else {					
			s.createSong(L);
			return "redirect:/dashboard";
		}
	}
//	READ
	@RequestMapping("/songs/{id}")
	public String read(@PathVariable("id") Long id, Model m, Song L) {
		L = s.findSong(id);
		m.addAttribute("song", L);
		return "show.jsp";
	}
//	UPDATE
	@RequestMapping(value="/songs/{id}/edit", method=RequestMethod.GET)
	public String showEdit(@PathVariable("id") Long id, Song L, Model m) {	
		L = s.findSong(id);
		m.addAttribute("song", L);		
		return "edit.jsp";
	}
	@RequestMapping(value="/songs/{id}", method=RequestMethod.PUT)
	public String update(@Valid @ModelAttribute("song") Song L, BindingResult result) {	
		if (result.hasErrors()) {
			return "edit.jsp";
		} else {
			s.updateSong(L);
			return "redirect:/dashboard";
		}	
	}	
//	DELETE
	@RequestMapping(value="/songs/{id}", method=RequestMethod.DELETE)
	public String delete(@PathVariable("id") Long id) {	
		s.deleteSong(id);
		return "redirect:/dashboard";
    }	
//	SEARCH
	@RequestMapping(value="/search", method=RequestMethod.POST)
	public String delete(@RequestParam("creator") String c, Model m) {	
		List<Song> creator = s.findCreator(c);
		m.addAttribute("s", true);
		m.addAttribute("Songs", creator);
		return "dashboard.jsp";
    }	
}
