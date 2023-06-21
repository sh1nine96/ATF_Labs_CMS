package com.gl.clientmanagement.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.clientmanagement.model.Client;
import com.gl.clientmanagement.repository.ClientRepository;
import com.gl.clientmanagement.service.ClientCreateService;

@Service
public class ClientCreateServiceImpl implements ClientCreateService {

	@Autowired
	ClientRepository clientRepository;

	public String saveAllClients(List<Client> clients) {
		clientRepository.saveAll(clients);
		return "saved to DB";
	}

}
