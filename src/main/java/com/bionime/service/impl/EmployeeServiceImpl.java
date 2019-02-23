package com.bionime.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bionime.dao.EmployeeDao;
import com.bionime.dao.StationEmployeeDao;
import com.bionime.entity.Employee;
import com.bionime.service.EmployeeService;

@CacheConfig(cacheNames="employee")
@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeDao eployeeDao;
	
	@Autowired
	StationEmployeeDao stationEmployeeDao;
	
	@Override
	public List<Employee> getAllEmployee() {
		return eployeeDao.findAll();
	}

	@Cacheable
	@Override
	public Employee getEmployeeById(int id) {
		return eployeeDao.findById(id);
	}

	@Override
	public Employee insertEmployee(Employee employee) {
		Employee oldEmployee = eployeeDao.findByIdentifier(employee.getIdentifier());
		if (oldEmployee != null) {
			return null;
		} else {
			return eployeeDao.save(employee);
		}
	}
	
	@CachePut(key = "#result.id")
	@Override
	public Employee updateEmployee(Employee employee) {
		return eployeeDao.save(employee);
	}

	@CacheEvict(key = "#id")
	@Transactional
	@Override
	public int deleteEmployeeById(int id) {
		eployeeDao.deleteById(id);
		stationEmployeeDao.deleteByEmpId(id);
		return 1;
	}
	
	@Override
	public List<Employee> getEmployeeByStationId(int stationId) {
		return eployeeDao.findEmployeeByStationId(stationId);
	}

}
