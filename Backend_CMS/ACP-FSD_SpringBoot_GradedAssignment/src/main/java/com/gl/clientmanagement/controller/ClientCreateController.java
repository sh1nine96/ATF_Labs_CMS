package com.gl.clientmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gl.clientmanagement.model.Client;
import com.gl.clientmanagement.service.ClientCreateService;

@RestController
@RequestMapping("/createService")
public class ClientCreateController {

	@Autowired
	ClientCreateService createService;

	@PostMapping("/addNewClients")
	public String addNewClients(@RequestBody List<Client> clients) {
		return createService.saveAllClients(clients);

	}

}
