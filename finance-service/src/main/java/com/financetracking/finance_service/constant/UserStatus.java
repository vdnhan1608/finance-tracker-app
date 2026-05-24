package com.financetracking.finance_service.constant;


public enum UserStatus {
    NEW("0", "NEW");

    private final String value;
    private final String name;
    
    UserStatus(String newValue, String newName) {
        value = newValue;
        name = newName;
    }

    public String getValue() {
        return value;
    }

    public String getName() {
        return name;
    }
}
