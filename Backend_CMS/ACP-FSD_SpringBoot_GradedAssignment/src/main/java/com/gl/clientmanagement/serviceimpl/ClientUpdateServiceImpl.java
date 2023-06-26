package com.gl.clientmanagement.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.clientmanagement.model.Client;
import com.gl.clientmanagement.repository.ClientRepository;
import com.gl.clientmanagement.service.ClientUpdateService;


import java.util.Optional;

@Service
public class ClientUpdateServiceImpl implements ClientUpdateService {

	@Autowired
	ClientRepository clientRepository;

	@Override
	public String updateExistingClient(int clientId, Client client) {
		Optional<Client> optionalClient = clientRepository.findById((clientId));
		if(optionalClient.isPresent()){
			Client existingClient = optionalClient.get();
			existingClient.setName(client.getName());
			existingClient.setMainContactPerson(client.getMainContactPerson());
			existingClient.setAddress(client.getAddress());
			existingClient.setCity(client.getCity());
			existingClient.setCountry(client.getCountry());
			existingClient.setGstNumber(client.getGstNumber());
			existingClient.setEmail(client.getEmail());
			existingClient.setPhone(client.getPhone());
			existingClient.setDeleted(client.isDeleted());
			clientRepository.saveAndFlush(existingClient);
			return "Client record with ID: " +clientId+ " updated";
		} else {
			throw new RuntimeException("The client with ID: " +clientId+ " does not exist");
		}

	}


}
