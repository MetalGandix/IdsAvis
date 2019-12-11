package com.database.idsdatabase;

import org.springframework.data.repository.CrudRepository;

import com.database.idsdatabase.Dottore;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface DottoreRepository extends CrudRepository<Dottore,Long> {

}