package com.gl.clientmanagement.controller;

import com.gl.clientmanagement.model.Invoice;
import com.gl.clientmanagement.service.InvoiceUpdateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.gl.clientmanagement.model.Client;
import com.gl.clientmanagement.service.ClientUpdateService;

@RestController
@RequestMapping("/updateService")
public class InvoiceUpdateController {

    @Autowired
    InvoiceUpdateService updateService;


    @PutMapping("/updateExistingInvoiceRecord")
    public String updateExistingInvoiceRecord(@PathVariable long id, @RequestBody Invoice invoice) {
        return updateService.updateExistingInvoice(id, invoice);
    }
}

