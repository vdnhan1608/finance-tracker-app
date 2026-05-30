package com.financetracking.finance_service.request;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class CategoryReqest {
    UUID user_id;
    String name;
    int type;
}
