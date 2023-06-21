package com.gl.clientmanagement.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gl.clientmanagement.model.Client;
import com.gl.clientmanagement.service.ClientReadService;

@RestController
@RequestMapping("/readService")
public class ClientReadController {

	@Autowired
	ClientReadService readService;

	@GetMapping("/listAll")
	public List<Client> listAll() {
		return readService.listAllClients();
	}

	@GetMapping("/findById")
	public Optional<Client> findById(Integer id) {
		return readService.fetchClientById(id);
	}

}

//@GetMapping("/getEmployeesSortedByFirstName")
//public List<Client> getSortedByFirstName(Direction direction) {
//	return readService.getClientsSortedByfirstName(direction);
//}
//
//@GetMapping("/fetchEmployeesByFirstName")
//public List<Client> fetchEmployeesByFirstName(String firstName) {
//	return readService.fetchClientsByFirstName(firstName);
//}
