package com.gl.clientmanagement.service;

import com.gl.clientmanagement.model.Client;

public interface ClientUpdateService {

	String updateExistingClient(int clientId, Client client);

}