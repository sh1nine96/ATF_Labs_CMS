package com.gl.clientmanagement.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.clientmanagement.model.Client;
import com.gl.clientmanagement.repository.ClientRepository;
import com.gl.clientmanagement.service.ClientReadService;

@Service
public class ClientReadServiceImpl implements ClientReadService {

	@Autowired
	ClientRepository clientRepository;

	@Override
	public List<Client> listAllClients() {
		return clientRepository.findAll();
	}

	@Override
	public Optional<Client> fetchClientById(Integer id) {
		return clientRepository.findById(id);
	}
	

//	@Override
//	public List<Client> getClientsSortedByfirstName(Direction direction) {
//		return clientRepository.findAll(Sort.by(direction, "firstName"));
//	}

//	@Override
//	public List<Client> fetchClientsByFirstName(String firstName) {
//		Client clientByFirstName = new Client();
//		clientByFirstName.setFirstName(firstName);
//		ExampleMatcher exampleMatcher = ExampleMatcher.matching()
//				.withMatcher("firstName", ExampleMatcher.GenericPropertyMatchers.exact())
//				.withIgnorePaths("id", "lastName", "email");
//		Example<Client> example = Example.of(clientByFirstName, exampleMatcher);
//		return clientRepository.findAll(example);
//	}



}
