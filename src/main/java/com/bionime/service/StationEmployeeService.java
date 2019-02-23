package com.bionime.service;

import java.util.List;

import com.bionime.entity.Employee;
import com.bionime.entity.StationEmployee;

public interface StationEmployeeService {
	
	public List<StationEmployee> getStationEmployeeByStationId(int stationId);
	
	public List<StationEmployee> getStationEmployeeByEmpId(int empId);
	
	public List<StationEmployee> insertStationEmployee(List<StationEmployee> stationEmployeeList);
	
	public void deleteStationEmployeeByStationId(int stationId);
	
	public void deleteStationEmployeeByEmpId(int empId);

	public List<StationEmployee> updateStationEmployeeByEmpId(Integer empId, List<StationEmployee> stationEmployeeList);
}
