package com.gl.clientmanagement.controller;

import java.util.List;
import java.util.Optional;

import com.gl.clientmanagement.model.Invoice;
import com.gl.clientmanagement.service.InvoiceReadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/readService")
public class InvoiceReadController {

    @Autowired
    InvoiceReadService readService;

    @GetMapping("/listAllInvoices")
    public List<Invoice> listAll() {return readService.listAllInvoices();
    }

    @GetMapping("/findInvoiceById")
    public Optional<Invoice> findById(long id) {
        return readService.fetchInvoiceById(id);
    }

}
