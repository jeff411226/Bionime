package com.bionime.pojo;

import java.io.Serializable;
import java.util.Collection;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HttpResult<T> implements Serializable {

	private static final long serialVersionUID = -6504417452871491061L;

	private boolean success = true;
	
	private String message = "OK";
	
	@JsonInclude(Include.NON_NULL)
	private T data;
	
	private int total = 0;
	
	private Integer code = 200;

	public HttpResult() {
		super();
	}

	public HttpResult(T data) {
		setData(data);
	}

	public HttpResult(boolean success, Integer code, String message, T data) {
		this.success = success;
		this.code = code;
		this.message = message;
		
		setData(data);
	}
	
	public static HttpResult success() {
		return new HttpResult(null);
	}
	
	public static HttpResult<Object> success(Object data) {
		return new HttpResult(data);
	}
	
	public static HttpResult fail() {
		return new HttpResult(false, 500, null, null);
	}
	
	public static HttpResult errorMsg(String msg) {
		return new HttpResult(false, 500, msg, null);
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Object getData() {
		return data;
	}

	public void setData(T objects) {
		if (objects != null) {
			total = 1;
			if (objects instanceof Collection) {
				total = ((Collection) objects).size();
			}
		} 
		this.data = objects;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public Integer getCode() {
		return code;
	}

	public void setCode(Integer code) {
		this.code = code;
	}

}
