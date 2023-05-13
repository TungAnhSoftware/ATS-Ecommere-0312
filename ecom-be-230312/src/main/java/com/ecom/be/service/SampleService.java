package com.ecom.be.service;

import com.ecom.be.model.SampleModel;
import com.ecom.be.repository.SampleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SampleService {
    private final SampleRepository sampleRepository;

    @Autowired
    public SampleService(SampleRepository sampleRepository) {
        this.sampleRepository = sampleRepository;
    }

    public List<SampleModel> getAllSamples() {
        return sampleRepository.findAll();
    }

    public void putSample(SampleModel sampleModel) {
        sampleRepository.save(sampleModel);
    }
}
