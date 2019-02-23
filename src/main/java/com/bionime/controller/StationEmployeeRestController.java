package com.bionime.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bionime.entity.StationEmployee;
import com.bionime.pojo.HttpResult;
import com.bionime.service.StationEmployeeService;

@RestController
@RequestMapping("/api")
public class StationEmployeeRestController {
	
	@Autowired
	StationEmployeeService stationEmployeeService;

	@PostMapping("/stationEmployee")
	public HttpResult<List<StationEmployee>> insertStationEmployee(@RequestBody List<StationEmployee> stationEmployeeList) {
		stationEmployeeList = stationEmployeeService.insertStationEmployee(stationEmployeeList);
		return new HttpResult<List<StationEmployee>>(stationEmployeeList);
	}
	
	@PutMapping("/stationEmployee/condition")
	public HttpResult<List<StationEmployee>> insertStationEmployee(@RequestParam(value="empId", required = true) Integer empId, @RequestBody List<StationEmployee> stationEmployeeList) {
		stationEmployeeList = stationEmployeeService.updateStationEmployeeByEmpId(empId, stationEmployeeList);
		return new HttpResult<List<StationEmployee>>(stationEmployeeList);
	}
	
}
