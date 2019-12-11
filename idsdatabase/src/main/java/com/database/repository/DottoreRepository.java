package com.database.repository;

import org.springframework.data.repository.CrudRepository;

import com.database.entity.Dottore;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface DottoreRepository extends CrudRepository<Dottore,Long> {

}