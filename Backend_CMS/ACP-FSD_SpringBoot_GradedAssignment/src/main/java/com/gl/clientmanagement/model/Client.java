package com.gl.clientmanagement.model;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "CLIENT")
public class Client {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	// name should not be > 50 chars
	@Column(length = 50, name = "name")
	private String name;
	@Column(length = 20, name = "mainContactPerson")
	private String mainContactPerson;
	@Column(length = 200, name = "address")
	private String address;
	@Column(length = 20, name = "city")
	private String city;
	@Column(length = 20, name = "country")
	private String country;
	@Column(length = 20, name="gstNumber")
	private String gstNumber;
	@Column(length = 50, name = "email")
	private String email;
	//phone should be of string only
	@Column(length = 20, name = "phone")
	private String phone;
	// be default is column ki value 0 hogi
	@Column (name = "isDeleted", nullable = false, columnDefinition = "int default 0")
	private boolean isDeleted;

//	@OneToMany(mappedBy = "clientId")
//	private List<Invoice> invoices;

}
