package com.gl.clientmanagement.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeController {

	@RequestMapping("/")
	public String handleWelcomePage() {

		return "<h2>Employee Management System</h2>";
	}

}
