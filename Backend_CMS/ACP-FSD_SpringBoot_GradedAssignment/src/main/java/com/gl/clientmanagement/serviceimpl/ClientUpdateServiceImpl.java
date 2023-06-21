package com.gl.clientmanagement.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.clientmanagement.model.Client;
import com.gl.clientmanagement.repository.ClientRepository;
import com.gl.clientmanagement.service.ClientUpdateService;

@Service
public class ClientUpdateServiceImpl implements ClientUpdateService {

	@Autowired
	ClientRepository clientRepository;

	@Override
	public String updateExistingEmployee(Client client) {
		long id = client.getId();
		boolean exists = clientRepository.existsById((int) id);
		if (exists) {
			clientRepository.saveAndFlush(client);
			return "Client record updated";
		} else
			throw new RuntimeException("The id: " + id + " you're trying to update is not present");
	}

}
