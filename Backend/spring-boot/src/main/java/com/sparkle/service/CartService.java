package com.sparkle.service;

import com.sparkle.exception.ProductException;
import com.sparkle.modal.Cart;
import com.sparkle.modal.CartItem;
import com.sparkle.modal.User;
import com.sparkle.request.AddItemRequest;

public interface CartService {
	
	public Cart createCart(User user);
	
	public String addCartItem(Long userId,AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);

}
