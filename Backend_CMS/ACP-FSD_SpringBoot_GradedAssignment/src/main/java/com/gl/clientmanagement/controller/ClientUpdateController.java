package com.gl.clientmanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.gl.clientmanagement.model.Client;
import com.gl.clientmanagement.service.ClientUpdateService;

@RestController
@RequestMapping("/updateService")
public class ClientUpdateController {

	@Autowired
	ClientUpdateService updateService;


	@PutMapping("/updateExistingClientRecord")
	public String updateExistingEmployeeRecord(@RequestParam int id, @RequestBody Client client) {
		return updateService.updateExistingClient(id, client);
	}
}
