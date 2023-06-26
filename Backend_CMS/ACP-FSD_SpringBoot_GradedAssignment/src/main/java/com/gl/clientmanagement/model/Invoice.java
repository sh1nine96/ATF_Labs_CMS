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
@Table(name = "INVOICE")
public class Invoice {
	
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		@Column(name="invoice_Id")
		private Long id;
		@Column(name = "amount")
		private double amount;
		@Column(name = "currency")
		private String currency;
		@Column(name = "selected_bank_account")
		private String selectedBankAccount;
		@Column(name = "date")
		private Date date;
		@Column(name = "description")
		private String description;
		@Column(name = "header")
		private String header;
		@Column(name = "status")
		private boolean status;
		@Column (name = "deleted", nullable = false, columnDefinition = "int default 0")
		private boolean isDeleted;
//(fetch = FetchType.LAZY)
	@ManyToOne
	@JoinColumn(name = "client_id")
	private Client clientId;
}
