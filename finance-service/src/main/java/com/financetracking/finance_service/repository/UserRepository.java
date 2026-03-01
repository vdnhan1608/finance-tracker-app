package com.financetracking.finance_service.repository;

import com.financetracking.finance_service.entity.UserEntity;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, UUID> {
}
