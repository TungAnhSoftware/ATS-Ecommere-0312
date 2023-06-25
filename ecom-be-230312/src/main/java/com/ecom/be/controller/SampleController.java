package com.ecom.be.controller;

import com.ecom.be.model.SampleModel;
import com.ecom.be.service.SampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/sample")
public class SampleController {
    private final SampleService sampleService;

    @Autowired
    public SampleController(SampleService sampleService) {
        this.sampleService = sampleService;
    }

    @GetMapping(path = "/all")
    public ResponseEntity<?> getAllTeacher() {
        List<SampleModel> samples = sampleService.getAllSamples();
        return ResponseEntity.ok(samples);
    }

    @PostMapping(path = "/addSample")
    public void putSample(@RequestBody SampleModel sampleModel) {
        sampleService.putSample(sampleModel);
    }
}
