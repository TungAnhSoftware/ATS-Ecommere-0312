package com.ecom.be.service;

import com.ecom.be.model.dto.CredentialsDto;
import com.ecom.be.model.dto.SignUpDto;
import com.ecom.be.model.dto.UserDto;
import com.ecom.be.common.exception.AuthException;
import com.ecom.be.common.mappers.UserMapper;
import com.ecom.be.model.UserModel;
import com.ecom.be.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final UserMapper userMapper;

    public UserDto login(CredentialsDto credentialsDto) {
        UserModel userModel = userRepository.findByLogin(credentialsDto.getLogin())
                .orElseThrow(() -> new AuthException("Unknown user", HttpStatus.NOT_FOUND));

        if (passwordEncoder.matches(CharBuffer.wrap(credentialsDto.getPassword()), userModel.getPassword())) {
            return userMapper.toUserDto(userModel);
        }
        throw new AuthException("Invalid password", HttpStatus.BAD_REQUEST);
    }

    public UserDto register(SignUpDto userDto) {
        Optional<UserModel> optionalUser = userRepository.findByLogin(userDto.getLogin());

        if (optionalUser.isPresent()) {
            throw new AuthException("Login already exists", HttpStatus.BAD_REQUEST);
        }

        UserModel userModel = userMapper.signUpToUser(userDto);
        userModel.setPassword(passwordEncoder.encode(CharBuffer.wrap(userDto.getPassword())));

        UserModel savedUserModel = userRepository.save(userModel);

        return userMapper.toUserDto(savedUserModel);
    }

    public UserDto findByLogin(String login) {
        UserModel userModel = userRepository.findByLogin(login)
                .orElseThrow(() -> new AuthException("Unknown user", HttpStatus.NOT_FOUND));
        return userMapper.toUserDto(userModel);
    }

}
