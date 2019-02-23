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
import com.bionime.service.StationService;

@RestController
@RequestMapping("/api")
public class StationRestController {
	
	@Autowired
	StationService stationService;

	@GetMapping("/stations")
	public HttpResult<List<Station>> getAllStation() {
		List<Station> stationList = stationService.getAllStation();
		return new HttpResult<List<Station>>(stationList);
	}
	
	@GetMapping("/station/{id}")
	public HttpResult<Station> getStationById(@PathVariable("id") Integer id) {
		Station station = stationService.getStationById(id);
		return new HttpResult<Station>(station);
	}
	
	@PostMapping("/station")
	public HttpResult<Station> insertStation(@RequestBody Station station) {
		station = stationService.insertStation(station);
		return new HttpResult<Station>(station);
	}
	
	@PutMapping("/station/{id}")
	public HttpResult<Station> updateStation(@RequestBody Station station) {
		station = stationService.updateStation(station);
		return new HttpResult<Station>(station);
	}
	
	@DeleteMapping("/station/{id}")
	public HttpResult<Station> deleteStation(@PathVariable("id") Integer id) {
		stationService.deleteStationById(id);
		return new HttpResult<Station>();
	}
	
	@GetMapping("/station/condition")
	public HttpResult<List<Station>> getStationByEmpId(@RequestParam(value="empId", required = true) Integer empId) {
		List<Station> stationList = stationService.getStationByEmpId(empId);
		return new HttpResult<List<Station>>(stationList);
	}
}
