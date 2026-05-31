package com.financetracking.finance_service.controller;

import com.financetracking.finance_service.entity.CategoryEntity;
import com.financetracking.finance_service.entity.UserEntity;
import com.financetracking.finance_service.request.CategoryReqest;
import com.financetracking.finance_service.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("")
    CategoryEntity createCategory(@RequestBody CategoryReqest request) {
        return categoryService.createCategory(request);
    }

    @PutMapping("/{categoryId}")
    CategoryEntity updateCategory(@PathVariable UUID categoryId, @RequestBody CategoryReqest request) {
        return categoryService.updateCategory(categoryId, request);
    }

    @DeleteMapping("/{categoryId}")
    void deleteCategory(@PathVariable UUID categoryId) {
        categoryService.deleteCategory(categoryId);
    }
}
