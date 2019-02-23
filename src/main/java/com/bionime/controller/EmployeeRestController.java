package com.bionime.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bionime.entity.Employee;
import com.bionime.entity.Station;
import com.bionime.pojo.HttpResult;
import com.bionime.service.EmployeeService;

@RestController
@RequestMapping("/api")
public class EmployeeRestController {
	
	@Autowired
	EmployeeService employeeService;
	
	@GetMapping("/employees")
	public HttpResult<List<Employee>> getAllEmployee() {
		List<Employee> employeeList = employeeService.getAllEmployee();
		return new HttpResult<List<Employee>>(employeeList);
	}

	@GetMapping("/employee/{id}")
	public HttpResult<Employee> getEmployeeById(@PathVariable("id") Integer id) {
		Employee employee = employeeService.getEmployeeById(id);
		return new HttpResult<Employee>(employee);
	}
	
	@PostMapping("/employee")
	public HttpResult<Employee> insertEmployee(@RequestBody Employee employee) {
		employee = employeeService.insertEmployee(employee);
		return new HttpResult<Employee>(employee);
	}
	
	@PutMapping("/employee/{id}")
	public HttpResult<Employee> updateEmployee(@RequestBody Employee employee) {
		employee = employeeService.updateEmployee(employee);
		return new HttpResult<Employee>(employee);
	}
	
	@DeleteMapping("/employee/{id}")
	public HttpResult<Employee> deleteEmployee(@PathVariable("id") Integer id) {
		employeeService.deleteEmployeeById(id);
		return new HttpResult<Employee>();
	}
	
	@GetMapping("/employee/condition")
	public HttpResult<List<Employee>> getEmployeeByStationId(@RequestParam(value="stationId", required = true) Integer stationId) {
		List<Employee> employeeList = employeeService.getEmployeeByStationId(stationId);
		return new HttpResult<List<Employee>>(employeeList);
	}
}
