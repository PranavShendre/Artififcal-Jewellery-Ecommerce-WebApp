package com.sparkle.service;

import com.sparkle.exception.UserException;
import com.sparkle.modal.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;

}
