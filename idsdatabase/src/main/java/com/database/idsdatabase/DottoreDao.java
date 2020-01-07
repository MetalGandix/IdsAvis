package com.database.idsdatabase;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.database.idsdatabase.Dottore;

@Repository
public interface DottoreDao extends CrudRepository<Dottore, Integer> {

	Dottore findByUsername(String username);
	//long deleteByUsername(String username);

}