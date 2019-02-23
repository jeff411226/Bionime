package com.bionime.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bionime.entity.Employee;

public interface EmployeeDao extends JpaRepository<Employee, Integer> {

	Employee findById(int id);
	
	Employee findByIdentifier(String identifier);
	
	@Query(value = "SELECT id, identifier, name, update_time FROM employee WHERE id IN (SELECT empId FROM station_employee WHERE stationId = :stationId)", nativeQuery = true)
	List<Employee> findEmployeeByStationId(@Param("stationId") int stationId);

}
