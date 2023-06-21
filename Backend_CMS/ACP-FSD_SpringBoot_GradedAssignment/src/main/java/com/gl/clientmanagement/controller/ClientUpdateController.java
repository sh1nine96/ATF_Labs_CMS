package com.gl.clientmanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gl.clientmanagement.model.Client;
import com.gl.clientmanagement.service.ClientUpdateService;

@RestController
@RequestMapping("/updateService")
public class ClientUpdateController {

	@Autowired
	ClientUpdateService updateService;

	@PutMapping("/updateExistingClientRecord")
	public String updateExistingEmployeeRecord(@RequestBody Client client) {
		return updateService.updateExistingEmployee(client);
	}
}
