package com.bionime.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class HospitalController {

	@GetMapping("/")
	public String functionList() {
		return "function";
	}
	
	@PostMapping("/stationInfo")
	public String toStationInfo(Model model, String stationId) {
		model.addAttribute("stationId", stationId);
		return "stationInfo";
	}
	
	@PostMapping("/assignEmp")
	public String toAssignEmp(Model model, String empId) {
		model.addAttribute("empId", empId);
		return "assignEmp";
	}
	
	@GetMapping("/{function}")
	public String function(@PathVariable String function) {
		return function;
	}
}
