package com.example.demo.service.repositories;

import com.example.demo.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<Users,Long> {
    Users getUsersByUserNameAndPassword(String userName,String password);
//  Users getUsersBypasswordandByUserName(String password, String userName);

}
