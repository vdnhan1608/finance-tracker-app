package com.financetracking.finance_service.service;

import com.financetracking.finance_service.constant.UserStatus;
import com.financetracking.finance_service.entity.UserEntity;
import com.financetracking.finance_service.repository.UserRepository;
import com.financetracking.finance_service.request.UserRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public List<UserEntity> getUsers() {
        return userRepository.findAll();

    }

    public UserEntity getUserById(UUID userId) {
        Optional<UserEntity> userEntity = userRepository.findById(userId);
        return userEntity.orElse(new UserEntity());
    }

    public UserEntity createUser(UserRequest request) {
        UserEntity newEntity = new UserEntity();
        newEntity.setName(request.getName());
        newEntity.setEmail(request.getEmail());
        newEntity.setStatus(UserStatus.NEW.getValue()); // newly added
        return userRepository.save(newEntity);
    }
}
