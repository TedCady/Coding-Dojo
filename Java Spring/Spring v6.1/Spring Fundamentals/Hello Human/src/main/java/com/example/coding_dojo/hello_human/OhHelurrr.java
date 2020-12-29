package com.example.coding_dojo.hello_human;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/")
public class OhHelurrr {
	@RequestMapping("")
	public String helloHuman() {
		return "Hello Human!";
	}
	@RequestMapping("/{first_name}")
	public String returnValue(@PathVariable String first_name) {
		return "Hello " + first_name + "!";
	}
	@RequestMapping("/{first_name}/{last_name}")
	public String returnValue(@PathVariable String first_name,@PathVariable String last_name) {
		return "Hello " + first_name + " " + last_name + "!";
	}
}