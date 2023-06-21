package com.gl.clientmanagement.service;

import com.gl.clientmanagement.model.Invoice;
import java.util.List;

public interface InvoiceCreateService {


	String saveAllInvoices(List<Invoice> invoices);

	

}