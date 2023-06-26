package com.gl.clientmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gl.clientmanagement.model.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {

}
