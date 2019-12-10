package com.hellokoding.auth.repository;

import org.springframework.data.repository.CrudRepository;
import com.hellokoding.auth.model.UserModules;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserModulesRepository extends CrudRepository<UserModules, Long> {

}