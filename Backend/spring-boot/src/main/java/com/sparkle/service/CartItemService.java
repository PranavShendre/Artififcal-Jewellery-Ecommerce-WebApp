package com.sparkle.service;

import com.sparkle.exception.CartItemException;
import com.sparkle.exception.UserException;
import com.sparkle.modal.Cart;
import com.sparkle.modal.CartItem;
import com.sparkle.modal.Product;

public interface CartItemService {
	
	public CartItem createCartItem(CartItem cartItem);
	
	public CartItem updateCartItem(Long userId, Long id,CartItem cartItem) throws CartItemException, UserException;
	
	public CartItem isCartItemExist(Cart cart,Product product,String size, Long userId);
	
	public void removeCartItem(Long userId,Long cartItemId) throws CartItemException, UserException;
	
	public CartItem findCartItemById(Long cartItemId) throws CartItemException;
	
}
