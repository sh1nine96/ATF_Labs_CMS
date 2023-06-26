package com.gl.clientmanagement.controller;

import com.gl.clientmanagement.service.InvoiceDeleteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/deleteService")
public class InvoiceDeleteController {

    @Autowired
    InvoiceDeleteService deleteService;

    @DeleteMapping("/deleteInvoicebyId")
    public String deleteInvoicebyId(@RequestParam("id") Integer id) {
        return deleteService.deleteInvoiceById(id);
    }

}

