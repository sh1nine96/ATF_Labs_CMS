package com.gl.clientmanagement.serviceimpl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.clientmanagement.model.Client;
import com.gl.clientmanagement.repository.ClientRepository;
import com.gl.clientmanagement.service.ClientDeleteService;

@Service
public class ClientDeleteServiceImpl implements ClientDeleteService {

	@Autowired
	ClientRepository clientRepository;

	@Override
	public String deleteClientById(Integer id) {
	    Optional<Client> clientOptional =clientRepository.findById(id);
	    if (clientOptional.isPresent()) {
	        Client client = clientOptional.get();
	        client.setDeleted(true); // Set the isDeleted field to true
	        clientRepository.save(client);
	        return "Client with id: " + id + " is deleted";
	    } else {
	        return "Client not found with id: " + id;
	    }
	}


}
