package com.bionime.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bionime.entity.Station;

public interface StationDao extends JpaRepository<Station, Integer> {

	Station getStationById(int id);

	@Query(value = "SELECT * FROM station WHERE id IN (SELECT stationId FROM station_employee WHERE empId = :empId)", nativeQuery = true)
	List<Station> findStationByEmpId(@Param("empId") Integer empId);

}
