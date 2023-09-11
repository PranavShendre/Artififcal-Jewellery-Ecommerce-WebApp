package com.sparkle.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.sparkle.modal.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	public User findByEmail(String email);

}
