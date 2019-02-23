package com.bionime.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bionime.dao.StationEmployeeDao;
import com.bionime.entity.Employee;
import com.bionime.entity.StationEmployee;
import com.bionime.service.StationEmployeeService;

@Service
public class StationEmployeeServiceImpl implements StationEmployeeService {
	
	@Autowired
	StationEmployeeDao stationEmployeeDao;

	@Override
	public List<StationEmployee> getStationEmployeeByStationId(int stationId) {
		return stationEmployeeDao.findByStationId(stationId);
	}

	@Override
	public List<StationEmployee> getStationEmployeeByEmpId(int empId) {
		return stationEmployeeDao.findByEmpId(empId);
	}

	@Override
	public List<StationEmployee> insertStationEmployee(List<StationEmployee> stationEmployeeList) {
		return stationEmployeeDao.saveAll(stationEmployeeList);
	}

	@Override
	public void deleteStationEmployeeByStationId(int stationId) {
		stationEmployeeDao.deleteByStationId(stationId);
	}

	@Override
	public void deleteStationEmployeeByEmpId(int empId) {
		stationEmployeeDao.deleteByEmpId(empId);
	}

	@Override
	public List<StationEmployee> updateStationEmployeeByEmpId(Integer empId, List<StationEmployee> stationEmployeeList) {
		deleteStationEmployeeByEmpId(empId);
		return stationEmployeeDao.saveAll(stationEmployeeList);
	}

}
