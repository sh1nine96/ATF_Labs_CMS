package com.gl.clientmanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gl.clientmanagement.service.ClientDeleteService;

@RestController
@RequestMapping("/deleteService")
public class ClientDeleteController {

	@Autowired
	ClientDeleteService deleteService;

	@DeleteMapping("/deleteClientbyId")
	public String deleteClientbyId(@RequestParam("id") Integer id) {
		return deleteService.deleteClientById(id);
	}

}
