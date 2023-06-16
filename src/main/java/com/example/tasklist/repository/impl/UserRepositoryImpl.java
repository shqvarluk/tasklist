package com.example.tasklist.repository.impl;

import com.example.tasklist.domain.exception.ResourceMappingException;
import com.example.tasklist.domain.user.Role;
import com.example.tasklist.domain.user.User;
import com.example.tasklist.repository.DataSourceConfig;
import com.example.tasklist.repository.UserRepository;
import com.example.tasklist.repository.mapper.UserRowMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class UserRepositoryImpl implements UserRepository {

    private final DataSourceConfig dataSourceConfig;

    private final String FIND_BY_ID = """
            SELECT u.id              as user_id,
                   u.name            as user_name,
                   u.username        as user_username,
                   u.password        as user_password,
                   u.address         as user_address,
                   u.city_id         as user_city_id,
                   u.zone_id         as user_zone_id,
                   u.phone           as user_phone,
                   u.other_contact   as user_other_contact,
                   ur.role           as user_role_role,
                   t.id              as task_id,
                   t.title           as task_title,
                   t.description     as task_description,
                   t.expiration_date as task_expiration_date,
                   t.status          as task_status
            FROM users u
                     LEFT JOIN users_roles ur on u.id = ur.user_id
                     LEFT JOIN users_tasks ut on u.id = ut.user_id
                     LEFT JOIN tasks t on ut.task_id = t.id
            WHERE u.id = ?""";

    private final String FIND_BY_USERNAME = """
            SELECT u.id              as user_id,
                   u.name            as user_name,
                   u.username        as user_username,
                   u.password        as user_password,
                   u.address         as user_address,
                   u.city_id         as user_city_id,
                   u.zone_id         as user_zone_id,
                   u.phone           as user_phone,
                   u.other_contact   as user_other_contact,
                   ur.role           as user_role_role,
                   t.id              as task_id,
                   t.title           as task_title,
                   t.description     as task_description,
                   t.expiration_date as task_expiration_date,
                   t.status          as task_status
            FROM users u
                     LEFT JOIN users_roles ur on u.id = ur.user_id
                     LEFT JOIN users_tasks ut on u.id = ut.user_id
                     LEFT JOIN tasks t on ut.task_id = t.id
            WHERE u.username = ?""";

    private final String UPDATE = """
            UPDATE users
            SET name = ?,
                username = ?,
                password = ?,
                address = ?,
                city_id = ?,
                zone_id = ?,
                phone = ?,
                other_contact = ?
            WHERE id = ?""";

    private final String CREATE = """
            INSERT INTO users (name, username, password, address, city_id, zone_id, phone, other_contact)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)""";

    private final String INSERT_USER_ROLE = """
            INSERT INTO users_roles (user_id, role)
            VALUES (?, ?)""";

    private final String IS_TASK_OWNER = """
            SELECT exists(
                                SELECT 1
                                FROM users_tasks
                                WHERE user_id = ?
                                  AND task_id = ?
                                )""";

    private final String DELETE = """
            UPDATE users_roles
            SET role = 'ROLE_BLOCKED'
            WHERE user_id = ?""";

    private final String ADD_ROLE_USER = """
            UPDATE users_roles
            SET role = 'ROLE_USER'
            WHERE user_id = ?""";

    private final String ADD_ROLE_ADMIN = """
            UPDATE users_roles
            SET role = 'ROLE_ADMIN'
            WHERE user_id = ?""";

    @Override
    public Optional<User> findById(Long id) {
        try {
            Connection connection = dataSourceConfig.getConnection();
            PreparedStatement statement = connection.prepareStatement(FIND_BY_ID,
                    ResultSet.TYPE_SCROLL_INSENSITIVE,
                    ResultSet.CONCUR_READ_ONLY);
            statement.setLong(1, id);
            try (ResultSet rs = statement.executeQuery()){
                return Optional.ofNullable(UserRowMapper.mapRow(rs));
            }
        } catch (SQLException e) {
            throw new ResourceMappingException("Exception while finding user by id.");
        }
    }

    @Override
    public Optional<User> findByUsername(String username) {
        try {
            Connection connection = dataSourceConfig.getConnection();
            PreparedStatement statement = connection.prepareStatement(FIND_BY_USERNAME,
                    ResultSet.TYPE_SCROLL_INSENSITIVE,
                    ResultSet.CONCUR_READ_ONLY);
            statement.setString(1, username);
            try (ResultSet rs = statement.executeQuery()){
                return Optional.ofNullable(UserRowMapper.mapRow(rs));
            }
        } catch (SQLException e) {
            throw new ResourceMappingException("Exception while finding user by username.");
        }
    }

    @Override
    public void update(User user) {
        try {
            Connection connection = dataSourceConfig.getConnection();
            PreparedStatement statement = connection.prepareStatement(UPDATE);
            statement.setString(1, user.getName());
            statement.setString(2, user.getUsername());
            statement.setString(3, user.getPassword());

            if (user.getAddress() == null){
                statement.setNull(4, Types.VARCHAR);
            } else {
                statement.setString(4, user.getAddress());
            }

            if (user.getAddress() == null){
                statement.setNull(5, Types.INTEGER);
            } else {
                statement.setLong(5, user.getCityId());
            }

            if (user.getAddress() == null){
                statement.setNull(6, Types.INTEGER);
            } else {
                statement.setLong(6, user.getZoneId());
            }

            if (user.getAddress() == null){
                statement.setNull(7, Types.VARCHAR);
            } else {
                statement.setString(7, user.getPhone());
            }

            if (user.getAddress() == null){
                statement.setNull(8, Types.VARCHAR);
            } else {
                statement.setString(8, user.getOtherContact());
            }

            statement.setLong(9, user.getId());
            statement.executeUpdate();
        } catch (SQLException e) {
            throw new ResourceMappingException("Exception while updating user.");
        }
    }

    @Override
    public void addRoleUser(Long id) {
        try {
            Connection connection = dataSourceConfig.getConnection();
            PreparedStatement statement = connection.prepareStatement(ADD_ROLE_USER);
            statement.setLong(1, id);
            statement.executeUpdate();
        } catch (SQLException e) {
            throw new ResourceMappingException("Exception while add role user by id.");
        }
    }

    @Override
    public void addRoleAdmin(Long id) {
        try {
            Connection connection = dataSourceConfig.getConnection();
            PreparedStatement statement = connection.prepareStatement(ADD_ROLE_ADMIN);
            statement.setLong(1, id);
            statement.executeUpdate();
        } catch (SQLException e) {
            throw new ResourceMappingException("Exception while add role user by id.");
        }
    }

    @Override
    public void create(User user) {
        try {
            Connection connection = dataSourceConfig.getConnection();
            PreparedStatement statement = connection.prepareStatement(CREATE, PreparedStatement.RETURN_GENERATED_KEYS);
            statement.setString(1, user.getName());
            statement.setString(2, user.getUsername());
            statement.setString(3, user.getPassword());
            statement.executeUpdate();
            try (ResultSet rs = statement.getGeneratedKeys()){
                rs.next();
                user.setId(rs.getLong(1));
            }
        } catch (SQLException e) {
            throw new ResourceMappingException("Exception while creating user.");
        }
    }

    @Override
    public void insertUserRole(Long userId, Role role) {
        try {
            Connection connection = dataSourceConfig.getConnection();
            PreparedStatement statement = connection.prepareStatement(INSERT_USER_ROLE);
            statement.setLong(1, userId);
            statement.setString(2, role.name());
            statement.executeUpdate();
        } catch (SQLException e) {
            throw new ResourceMappingException("Exception while inserting user role.");
        }
    }

    @Override
    public boolean isTaskOwner(Long userId, Long taskId) {
        try {
            Connection connection = dataSourceConfig.getConnection();
            PreparedStatement statement = connection.prepareStatement(IS_TASK_OWNER);
            statement.setLong(1, userId);
            statement.setLong(2, taskId);
            try (ResultSet rs = statement.executeQuery()){
                rs.next();
                return rs.getBoolean(1);
            }
        } catch (SQLException e) {
            throw new ResourceMappingException("Exception while checking if user is task owner.");
        }
    }

    @Override
    public void delete(Long id) {
        try {
            Connection connection = dataSourceConfig.getConnection();
            PreparedStatement statement = connection.prepareStatement(DELETE);
            statement.setLong(1, id);
            statement.executeUpdate();
        } catch (SQLException e) {
            throw new ResourceMappingException("Exception while deleting user.");
        }
    }

}
