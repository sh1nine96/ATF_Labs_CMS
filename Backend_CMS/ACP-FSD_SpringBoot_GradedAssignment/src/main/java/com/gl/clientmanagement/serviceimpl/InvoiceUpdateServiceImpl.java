package com.gl.clientmanagement.serviceimpl;

import com.gl.clientmanagement.model.Invoice;
import com.gl.clientmanagement.repository.InvoiceRepository;
import com.gl.clientmanagement.service.InvoiceUpdateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import java.util.Optional;

@Service
public class InvoiceUpdateServiceImpl implements InvoiceUpdateService{

    @Autowired
    InvoiceRepository invoiceRepository;

    @Override
    public String updateExistingInvoice(long id, Invoice invoice) {
        Optional<Invoice> optionalInvoice = invoiceRepository.findById((id));
        if(optionalInvoice.isPresent()){
            Invoice existingInvoice = optionalInvoice.get();
            existingInvoice.setClientId(invoice.getClientId());
            existingInvoice.setAmount(invoice.getAmount());
            existingInvoice.setCurrency(invoice.getCurrency());
            existingInvoice.setSelectedBankAccount(invoice.getSelectedBankAccount());
            existingInvoice.setDescription(invoice.getDescription());
            existingInvoice.setHeader(invoice.getHeader());

            invoiceRepository.saveAndFlush(existingInvoice);
            return "Invoice record with ID: " +id+ " updated";
        } else {
            throw new RuntimeException("The invoice with ID: " +id+ " does not exist");
        }

    }


}
