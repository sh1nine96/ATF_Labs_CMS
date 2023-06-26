package com.gl.clientmanagement.serviceimpl;

import com.gl.clientmanagement.model.Invoice;
import com.gl.clientmanagement.repository.InvoiceRepository;
import com.gl.clientmanagement.service.InvoiceReadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class InvoiceReadServiceImpl implements InvoiceReadService {
    @Autowired
    InvoiceRepository invoiceRepository;


    @Override
    public Optional<Invoice> fetchInvoiceById(Long id) {

        return invoiceRepository.findById(id);
    }

    @Override
    public List<Invoice> listAllInvoices() {
        return invoiceRepository.findAll();
    }
}
