package com.bionime.entity;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import org.apache.commons.lang3.builder.ReflectionToStringBuilder;

@Entity
@Table(name = "station_employee")
@IdClass(StationEmployeeId.class)
public class StationEmployee implements Serializable {

	private static final long serialVersionUID = -6257441189367785474L;

	@Id
	@Column(name = "stationId")
	private int stationId;
	
	@Id
	@Column(name = "empId")
	private int empId;
	
	@Column(name = "update_time", insertable = false, updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
	private Timestamp updateTime;

	public int getStationId() {
		return stationId;
	}

	public void setStationId(int stationId) {
		this.stationId = stationId;
	}

	public int getEmpId() {
		return empId;
	}

	public void setEmpId(int empId) {
		this.empId = empId;
	}

	public Timestamp getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Timestamp updateTime) {
		this.updateTime = updateTime;
	}
	
	@Override
	public String toString() {
		return ReflectionToStringBuilder.toString(this);
	}
}

class StationEmployeeId implements Serializable {
	private static final long serialVersionUID = 3989044196607707465L;
	
	int stationId;
	int empId;
}