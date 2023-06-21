package com.gl.clientmanagement.service;

import java.util.List;
import java.util.Optional;

import com.gl.clientmanagement.model.Client;

public interface ClientReadService {


	Optional<Client> fetchClientById(Integer id);

//	List<Client> fetchClientsByFirstName(String firstName);

	List<Client> listAllClients();

//	List<Client> getClientsSortedByfirstName(Direction direction);

}