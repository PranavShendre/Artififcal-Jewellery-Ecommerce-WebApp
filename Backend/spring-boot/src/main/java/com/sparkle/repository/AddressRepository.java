package com.sparkle.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sparkle.modal.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
