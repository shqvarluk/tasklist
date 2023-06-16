package com.example.tasklist.repository.mapper;

import com.example.tasklist.domain.task.Status;
import com.example.tasklist.domain.task.Task;
import com.example.tasklist.domain.user.Role;
import com.example.tasklist.domain.user.User;
import lombok.SneakyThrows;

import java.sql.ResultSet;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class UserRowMapper {

    @SneakyThrows
    public static User mapRow(ResultSet resultSet){
        Set<Role> roles = new HashSet<>();
        while (resultSet.next()){
            roles.add(Role.valueOf(resultSet.getString("user_role_role")));
        }
        resultSet.beforeFirst();
        List<Task> tasks = TaskRowMapper.mapRows(resultSet);
        resultSet.beforeFirst();
        if (resultSet.next()){
            User user = new User();
            user.setId(resultSet.getLong("user_id"));
            user.setName(resultSet.getString("user_name"));
            user.setUsername(resultSet.getString("user_username"));
            user.setPassword(resultSet.getString("user_password"));
            user.setAddress(resultSet.getString("user_address"));
            user.setCityId(resultSet.getLong("user_city_id"));
            user.setZoneId(resultSet.getLong("user_zone_id"));
            user.setPhone(resultSet.getString("user_phone"));
            user.setOtherContact(resultSet.getString("user_other_contact"));
            user.setRoles(roles);
            user.setTasks(tasks);
            return user;
        }
        return null;
    }

}
