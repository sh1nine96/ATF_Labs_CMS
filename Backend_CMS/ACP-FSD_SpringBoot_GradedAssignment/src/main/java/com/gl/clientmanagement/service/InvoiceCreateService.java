package com.gl.clientmanagement.service;

import com.gl.clientmanagement.model.Invoice;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

public interface InvoiceCreateService {


	String saveAllInvoices(List<Invoice> invoices);

	

}