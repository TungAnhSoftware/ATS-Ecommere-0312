package com.ecom.be.common.mappers;

import com.ecom.be.common.dto.SignUpDto;
import com.ecom.be.common.dto.UserDto;
import com.ecom.be.common.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);

}
