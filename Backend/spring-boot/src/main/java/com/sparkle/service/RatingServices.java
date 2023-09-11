package com.sparkle.service;

import java.util.List;

import com.sparkle.exception.ProductException;
import com.sparkle.modal.Rating;
import com.sparkle.modal.User;
import com.sparkle.request.RatingRequest;

public interface RatingServices {
	
	public Rating createRating(RatingRequest req,User user) throws ProductException;
	
	public List<Rating> getProductsRating(Long productId);

}
