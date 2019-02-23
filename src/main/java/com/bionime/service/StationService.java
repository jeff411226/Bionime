package com.bionime.service;

import java.util.List;

import com.bionime.entity.Station;

public interface StationService {
	
	public List<Station> getAllStation();

	public Station getStationById(int id);
	
	public Station insertStation(Station station);
	
	public Station updateStation(Station station);
	
	public int deleteStationById(int id);

	public List<Station> getStationByEmpId(Integer empId);

}
