package com.gl.clientmanagement;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan("com.gl.clientmanagement")
@OpenAPIDefinition
public class AcpFsdSpringBootGradedAssignmentApplication implements CommandLineRunner {


	public static void main(String[] args) {
		SpringApplication.run(AcpFsdSpringBootGradedAssignmentApplication.class, args);
		System.out.println("Server started");
	}

	@Override
	public void run(String... args) throws Exception {

	}

}
