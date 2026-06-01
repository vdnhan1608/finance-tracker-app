package com.financetracking.finance_service.repository;

import com.financetracking.finance_service.entity.TransactionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface TransactionRepository extends JpaRepository<TransactionEntity, UUID> {

    @Query(
            value = """
        SELECT
            t.*
        FROM transactions t
        JOIN users fu
            ON t.from_account_id = fu.id
        JOIN users tu
            ON t.to_account_id = tu.id
        WHERE tu.id = :userId
    """,
            nativeQuery = true
    )
    List<TransactionEntity> findAllReceivedTransactions(
            @Param("userId") UUID userId
    );
}
