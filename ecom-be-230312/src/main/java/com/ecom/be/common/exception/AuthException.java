package com.ecom.be.common.exception;

import org.springframework.http.HttpStatus;

public class AuthException extends RuntimeException{
    private final HttpStatus status;

    public AuthException(String message, HttpStatus status) {
        super(message);
        this.status = status;
    }

    public HttpStatus getStatus() {
        return status;
    }

}
