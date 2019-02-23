package com.bionime.service;

import java.util.List;

import com.bionime.entity.Employee;
import com.bionime.entity.Station;

public interface EmployeeService {
	
	public List<Employee> getAllEmployee();
	
	public Employee getEmployeeById(int id);
	
	public Employee insertEmployee(Employee employee);
	
	public Employee updateEmployee(Employee employee);
	
	public int deleteEmployeeById(int id);
	
	public List<Employee> getEmployeeByStationId(int stationId);

}
