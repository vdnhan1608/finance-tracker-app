package com.financetracking.finance_service.controller;

import com.financetracking.finance_service.entity.UserEntity;
import com.financetracking.finance_service.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    UserService userService;

    @RequestMapping("")
    List<UserEntity> getUsers() {
        return userService.getUsers();
    }
}
