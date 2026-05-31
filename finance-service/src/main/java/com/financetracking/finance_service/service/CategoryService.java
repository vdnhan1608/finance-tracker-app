package com.financetracking.finance_service.service;

import com.financetracking.finance_service.entity.CategoryEntity;
import com.financetracking.finance_service.repository.CategoryRepository;
import com.financetracking.finance_service.request.CategoryReqest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CategoryService {
    @Autowired
    CategoryRepository categoryRepository;

    public List<CategoryEntity> getCategories() {
        return categoryRepository.findAll();
    }

    public CategoryEntity getCategoryById(UUID categoryId) {
        Optional<CategoryEntity> categoryEntity = categoryRepository.findById(categoryId);
        return categoryEntity.orElse(new CategoryEntity());
    }

    public CategoryEntity createCategory(CategoryReqest request) {
        CategoryEntity newEntity = new CategoryEntity();
        newEntity.setName(request.getName());
        newEntity.setUserId(request.getUser_id());
        newEntity.setType(request.getType());
        return categoryRepository.save(newEntity);
    }

    public CategoryEntity updateCategory(UUID categoryId, CategoryReqest request) {
        CategoryEntity categoryEntity = new CategoryEntity();
        categoryEntity.setId(categoryId);
        categoryEntity.setName(request.getName());
        categoryEntity.setType(request.getType());
        return categoryRepository.save(categoryEntity);
    }

    public void deleteCategory(UUID categoryId) {
        categoryRepository.deleteById(categoryId);
    }
}
