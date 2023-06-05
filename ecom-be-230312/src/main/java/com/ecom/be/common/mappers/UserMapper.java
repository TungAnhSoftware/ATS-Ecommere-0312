package com.ecom.be.common.mappers;

import com.ecom.be.model.dto.SignUpDto;
import com.ecom.be.model.dto.UserDto;
import com.ecom.be.model.UserModel;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(UserModel userModel);

    @Mapping(target = "password", ignore = true)
    UserModel signUpToUser(SignUpDto signUpDto);

}
