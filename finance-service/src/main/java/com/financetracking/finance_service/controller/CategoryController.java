package com.financetracking.finance_service.controller;

import com.financetracking.finance_service.entity.CategoryEntity;
import com.financetracking.finance_service.entity.UserEntity;
import com.financetracking.finance_service.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    @RequestMapping("")
    List<CategoryEntity> getCategories() {
        return categoryService.getCategories();
    }

    @RequestMapping("/{categoryId}")
    CategoryEntity getCategoryById(@PathVariable String categoryId) {
        return categoryService.getCategoryById(UUID.fromString(categoryId));
    }

}
