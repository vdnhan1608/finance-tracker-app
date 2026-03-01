package com.financetracking.finance_service.service;

import com.financetracking.finance_service.entity.UserEntity;
import com.financetracking.finance_service.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public List<UserEntity> getUsers() {
        return userRepository.findAll();

    }
}
