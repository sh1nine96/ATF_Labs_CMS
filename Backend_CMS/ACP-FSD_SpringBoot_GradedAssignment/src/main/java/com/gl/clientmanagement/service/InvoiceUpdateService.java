package com.gl.clientmanagement.service;


import com.gl.clientmanagement.model.Invoice;

public interface InvoiceUpdateService {

    String updateExistingInvoice(long id, Invoice invoice);

}