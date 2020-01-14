package com.database.idsdatabase.repository;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.database.idsdatabase.entity.AnalisiSangue;

//@RepositoryRestResource(collectionResourceRel="analisi",path = "analisi")
public interface AnalisiSangueRepository extends JpaRepository<AnalisiSangue, Long> {

}