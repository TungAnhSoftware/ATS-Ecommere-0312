package com.ecom.be.repository;

import com.ecom.be.model.SampleModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SampleRepository extends JpaRepository<SampleModel, Integer> {
}
