package com.financetracking.finance_service.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;


import java.time.LocalDate;

@Entity
@Table(name = "users")
@Getter
@Setter
public class UserEntity {
    @Id
    String id;
    String email;
    String name;
    String status;
    LocalDate createdAt;
    LocalDate updatedAt;
    LocalDate deleted_at;
}
