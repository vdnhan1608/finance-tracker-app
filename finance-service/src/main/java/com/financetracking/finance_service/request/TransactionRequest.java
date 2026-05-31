package com.financetracking.finance_service.request;

import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
public class TransactionRequest {
    UUID userId;
    UUID fromAccountId;
    UUID toAccountId;
    UUID categoryId;
    int transactionType;
    Long amount;
    String text;
    LocalDateTime transactionDate;
    UUID referenceId;
}
