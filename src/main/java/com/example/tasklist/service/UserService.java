package com.example.tasklist.service;

import com.example.tasklist.domain.user.Role;
import com.example.tasklist.domain.user.User;

import java.util.List;

public interface UserService {

    User getById(Long id);

    User getByUsername(String username);

    void addRoleAdmin(Long id);

    void addRoleUser(Long id);

    User update (User user);

    User create(User user);

    boolean isTaskOwner(Long userId, Long taskId);

    void delete(Long id);
}
