package com.financetracking.finance_service.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRequest {
    private String status;
    private String email;
    private String name;
}
