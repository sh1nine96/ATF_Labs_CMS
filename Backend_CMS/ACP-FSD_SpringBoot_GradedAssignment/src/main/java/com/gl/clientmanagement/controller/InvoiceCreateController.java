package com.gl.clientmanagement.controller;

import com.gl.clientmanagement.model.Invoice;
import com.gl.clientmanagement.service.InvoiceCreateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/createService")
public class InvoiceCreateController {
    @Autowired
    InvoiceCreateService invoiceCreateService;
//    @PostMapping("/addNewInvoices")
//    public String addNewInvoice(@RequestBody List<Invoice> invoices){
//        return  invoiceCreateService.saveAllInvoices(invoices);
        @PostMapping("/addNewInvoices")
        public String addNewInvoice(@RequestBody Invoice invoice){
        return  invoiceCreateService.saveInvoice(invoice);

    }
}
