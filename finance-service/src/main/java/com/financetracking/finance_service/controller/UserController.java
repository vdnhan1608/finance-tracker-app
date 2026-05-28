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

    @PostMapping("")
    UserEntity createUser(@RequestBody UserRequest request) {
        return userService.createUser(request);
    }

    @PutMapping("/{userId}")
    UserEntity updateUser(@PathVariable String userId, @RequestBody UserRequest request) {
        return userService.updateUser(UUID.fromString(userId), request);
    }

    @DeleteMapping("/{userId}")
    void deleteUser(@PathVariable String userId) {
        userService.deleteUser(UUID.fromString(userId));
    }
}
