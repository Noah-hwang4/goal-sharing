package com.basic.goalsharing.goal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.stream.Stream;

public interface GoalRepository extends JpaRepository<Goal, Long> {

    @Query("SELECT p " +
            "FROM Goal p " +
            "ORDER BY p.id DESC")
    Stream<Goal> findAllDesc();

}
