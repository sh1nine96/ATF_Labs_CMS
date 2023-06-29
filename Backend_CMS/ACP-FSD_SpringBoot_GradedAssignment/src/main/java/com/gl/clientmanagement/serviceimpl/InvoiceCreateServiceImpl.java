package com.gl.clientmanagement.serviceimpl;

import com.gl.clientmanagement.model.Client;
import com.gl.clientmanagement.model.Invoice;
import com.gl.clientmanagement.repository.ClientRepository;
import com.gl.clientmanagement.repository.InvoiceRepository;
import com.gl.clientmanagement.service.InvoiceCreateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class InvoiceCreateServiceImpl implements InvoiceCreateService {
    @Autowired
    InvoiceRepository invoiceRepository;

    @Autowired
    ClientRepository clientRepository;

//    @Override
//    public String saveAllInvoices(List<Invoice> invoices) {
//        for(Invoice invoice: invoices){
//            int clientId = invoice.getClientId().getId();
//            Optional<Client> optionalClient = clientRepository.findById(clientId);
//            if(optionalClient.isEmpty()){
//                throw  new IllegalArgumentException("Client with id: " +clientId+ " is not present ");
//            }
//        }
//        invoiceRepository.saveAll(invoices);

//        return "saved invoice to database";
//    }
    @Override
    public String saveInvoice(Invoice invoice) {
        int clientId = invoice.getClientId().getId();
        Optional<Client> optionalClient = clientRepository.findById(clientId);
        if (optionalClient.isEmpty()) {
            throw new IllegalArgumentException("Client with id: " + clientId + " is not present");
        }

        invoiceRepository.save(invoice);

        return "Saved invoice to the database";
    }

}
