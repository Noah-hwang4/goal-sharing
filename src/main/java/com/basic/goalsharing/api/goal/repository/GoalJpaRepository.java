package com.basic.goalsharing.api.goal.repository;

import com.basic.goalsharing.api.goal.model.Goal;
import com.basic.goalsharing.api.goal.model.GoalRequest;
import com.basic.goalsharing.api.goal.model.GoalResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface GoalJpaRepository extends JpaRepository<Goal, Long> {

    @Query("select g " +
            "from Goal g " +
            "order by g.id desc")
    List<GoalResponse> selectGoalList(GoalRequest request);

    @Transactional
    @Modifying
    @Query("update Goal g " +
            "set g.isAttainment = :isAttainment " +
            "where g.id = :id")
    int updateAttainment(int isAttainment, Long id);

}
