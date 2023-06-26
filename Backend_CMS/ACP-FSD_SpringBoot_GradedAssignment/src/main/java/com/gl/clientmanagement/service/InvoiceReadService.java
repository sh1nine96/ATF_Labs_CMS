package com.gl.clientmanagement.service;

import com.gl.clientmanagement.model.Client;
import com.gl.clientmanagement.model.Invoice;

import java.util.List;
import java.util.Optional;

public interface InvoiceReadService {


	Optional<Invoice> fetchInvoiceById(Long id);

	List<Invoice> listAllInvoices();


}