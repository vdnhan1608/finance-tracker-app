package com.financetracking.finance_service.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "users")
@Getter
@Setter
public class UserEntity {
    @Id
    UUID id;
    String email;
    String name;
    String status;
    LocalDate createdAt;
    LocalDate updatedAt;
    LocalDate deleted_at;
}
