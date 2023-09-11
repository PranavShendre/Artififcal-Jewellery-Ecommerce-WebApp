package com.sparkle.service;

import java.util.List;

import com.sparkle.exception.ProductException;
import com.sparkle.modal.Review;
import com.sparkle.modal.User;
import com.sparkle.request.ReviewRequest;

public interface ReviewService {

	public Review createReview(ReviewRequest req,User user) throws ProductException;
	
	public List<Review> getAllReview(Long productId);
	
	
}
