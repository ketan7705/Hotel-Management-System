package com.revature.hms.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.revature.hms.model.Booking;
import com.revature.hms.model.PickupAndDrop;


public interface PickupAndDropRepository extends CrudRepository<PickupAndDrop, Integer> {
  public PickupAndDrop findByPickupDropId(int pickupAndDropId);
}
