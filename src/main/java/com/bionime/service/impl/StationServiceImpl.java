package com.bionime.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bionime.dao.StationDao;
import com.bionime.dao.StationEmployeeDao;
import com.bionime.entity.Station;
import com.bionime.service.StationService;

@CacheConfig(cacheNames="station")
@Service
public class StationServiceImpl implements StationService {

	@Autowired
	StationDao stationDao;
	
	@Autowired
	StationEmployeeDao stationEmployeeDao;
	
	@Override
	public List<Station> getAllStation() {
		return stationDao.findAll();
	}
	
	@Cacheable
	@Override
	public Station getStationById(int id) {
		return stationDao.getStationById(id);
	}

	@Override
	public Station insertStation(Station station) {
		return stationDao.save(station);
	}
	
	@CachePut(key = "#result.id")
	@Override
	public Station updateStation(Station station) {
		return stationDao.save(station);
	}

	@CacheEvict(key = "#id")
	@Transactional
	@Override
	public int deleteStationById(int id) {
		stationDao.deleteById(id);
		stationEmployeeDao.deleteByStationId(id);
		return 1;
	}

	@Override
	public List<Station> getStationByEmpId(Integer empId) {
		return stationDao.findStationByEmpId(empId);
	}

}
