package com.example.demo.service.repositories;

import com.example.demo.model.Lend;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LendRepository extends JpaRepository<Lend,Long> {


    List<Lend> findLendsByUserId(Long user);
}
