package com.financetracking.finance_service.controller;

import com.financetracking.finance_service.entity.UserEntity;
import com.financetracking.finance_service.request.UserRequest;
import com.financetracking.finance_service.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    UserService userService;

    @RequestMapping("")
    List<UserEntity> getUsers() {
        return userService.getUsers();
    }

    @RequestMapping("/{userId}")
    UserEntity getUserById(@PathVariable String userId) {
        return userService.getUserById(UUID.fromString(userId));
    }

    @PostMapping("/{userId}")
    UserEntity createUser(@RequestBody UserRequest request) {
        return userService.createUser(request);
    }
}
