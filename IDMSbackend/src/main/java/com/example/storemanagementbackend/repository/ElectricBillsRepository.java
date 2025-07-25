package com.example.storemanagementbackend.repository;

import com.example.storemanagementbackend.model.ElectricBills;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ElectricBillsRepository extends JpaRepository<ElectricBills, Long> {
} 