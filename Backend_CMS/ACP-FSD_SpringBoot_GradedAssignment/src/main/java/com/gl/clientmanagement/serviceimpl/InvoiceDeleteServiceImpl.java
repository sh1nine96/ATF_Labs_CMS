package com.gl.clientmanagement.serviceimpl;

import com.gl.clientmanagement.model.Invoice;
import com.gl.clientmanagement.repository.InvoiceRepository;
import com.gl.clientmanagement.service.InvoiceDeleteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class InvoiceDeleteServiceImpl implements InvoiceDeleteService {
    @Autowired
    InvoiceRepository invoiceRepository;
    @Override
    public String deleteInvoiceById(long id) {
        Optional<Invoice> invoiceOptional = invoiceRepository.findById(id);
        if(invoiceOptional.isPresent()){
            Invoice invoice  = invoiceOptional.get();
            invoice.setDeleted(true);
            invoiceRepository.save(invoice);

            return "Invoice deleted with id: " + id;
        } else {
            return "invoice with id: " +id+ "is not found";
        }

}}
