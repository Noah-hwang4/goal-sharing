package com.basic.goalsharing.api.goal.repository;

import com.basic.goalsharing.api.goal.model.Goal;
import com.basic.goalsharing.api.goal.model.GoalRequest;
import com.basic.goalsharing.api.goal.model.GoalResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface GoalJpaRepository extends JpaRepository<Goal, Long> {

    @Query("select g " +
            "from Goal g " +
            "order by g.id desc")
    List<GoalResponse> selectGoalList(GoalRequest request);

}
