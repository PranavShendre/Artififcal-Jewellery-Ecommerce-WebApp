package com.sparkle.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sparkle.modal.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
