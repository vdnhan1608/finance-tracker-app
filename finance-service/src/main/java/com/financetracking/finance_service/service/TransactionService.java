package com.financetracking.finance_service.service;

import com.financetracking.finance_service.entity.TransactionEntity;
import com.financetracking.finance_service.repository.TransactionRepository;
import com.financetracking.finance_service.request.TransactionRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class TransactionService {
    @Autowired
    TransactionRepository transactionRepository;

    public List<TransactionEntity> getTransactions() {
        return transactionRepository.findAll();
    }

    public TransactionEntity getTransactionById(UUID transactionId) {
        Optional<TransactionEntity> transactionEntity = transactionRepository.findById(transactionId);
        return transactionEntity.orElse(new TransactionEntity());
    }

    public TransactionEntity createTransaction(TransactionRequest request) {
        TransactionEntity newEntity = new TransactionEntity();
        newEntity.setUserId(request.getUserId());
        newEntity.setFromAccountId(request.getFromAccountId());
        newEntity.setToAccountId(request.getToAccountId());
        newEntity.setCategoryId(request.getCategoryId());
        newEntity.setTransactionType(request.getTransactionType());
        newEntity.setAmount(request.getAmount());
        newEntity.setText(request.getText());
        newEntity.setTransactionDate(request.getTransactionDate());
        newEntity.setReferenceId(request.getReferenceId());
        return transactionRepository.save(newEntity);
    }

    public TransactionEntity updateTransaction(UUID transactionId, TransactionRequest request) {
        TransactionEntity transactionEntity = new TransactionEntity();
        transactionEntity.setId(transactionId);
        transactionEntity.setUserId(request.getUserId());
        transactionEntity.setFromAccountId(request.getFromAccountId());
        transactionEntity.setToAccountId(request.getToAccountId());
        transactionEntity.setCategoryId(request.getCategoryId());
        transactionEntity.setTransactionType(request.getTransactionType());
        transactionEntity.setAmount(request.getAmount());
        transactionEntity.setText(request.getText());
        transactionEntity.setTransactionDate(request.getTransactionDate());
        transactionEntity.setReferenceId(request.getReferenceId());
        return transactionRepository.save(transactionEntity);
    }

    public void deleteTransaction(UUID transactionId) {
        transactionRepository.deleteById(transactionId);
    }
}
