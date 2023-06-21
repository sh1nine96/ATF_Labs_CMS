package com.gl.clientmanagement.model;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Invoice {
	
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		@Column(name="invoice_Id")
		private Long id;
		private double amount;
		private String currency;
		private String selectedBankAccount;
		private Date date;
		private String description;
		private String header;
		private boolean status;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "client_id")
	private Client clientId;
}
