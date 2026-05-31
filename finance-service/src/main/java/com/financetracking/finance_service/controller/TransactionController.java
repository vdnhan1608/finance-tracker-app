package com.financetracking.finance_service.controller;

import com.financetracking.finance_service.entity.TransactionEntity;
import com.financetracking.finance_service.request.TransactionRequest;
import com.financetracking.finance_service.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {
    @Autowired
    TransactionService transactionService;

    @RequestMapping("")
    List<TransactionEntity> getTransactions() {
        return transactionService.getTransactions();
    }

    @RequestMapping("/{transactionId}")
    TransactionEntity getTransactionById(@PathVariable UUID transactionId) {
        return transactionService.getTransactionById(transactionId);
    }

    @PostMapping("")
    TransactionEntity createTransaction(@RequestBody TransactionRequest request) {
        return transactionService.createTransaction(request);
    }

    @PutMapping("/{transactionId}")
    TransactionEntity updateTransaction(@PathVariable UUID transactionId, @RequestBody TransactionRequest request) {
        return transactionService.updateTransaction(transactionId,request);
    }

    @DeleteMapping("/{transactionId}")
    void deleteTransaction(@PathVariable UUID  transactionId) {
        transactionService.deleteTransaction(transactionId);
    }
}
