package com.bionime.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.bionime.entity.StationEmployee;

public interface StationEmployeeDao extends JpaRepository<StationEmployee, Integer> {

	List<StationEmployee> findByStationId(int stationId);
	
	List<StationEmployee> findByEmpId(int empId);
	
//	@Transactional
//    @Modifying
//    @Query("DELETE FROM station_employee where stationId = :stationId")
	List<StationEmployee> deleteByStationId(/* @Param("stationId") */int stationId);
	
	@Transactional
    @Modifying
    @Query(value = "DELETE FROM station_employee where empId = :empId", nativeQuery = true)
	void deleteByEmpId(@Param("empId") int empId);
}
