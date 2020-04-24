package com.basic.goalsharing.api.goal.repository;

import com.basic.goalsharing.api.goal.model.GoalRequest;
import com.basic.goalsharing.api.goal.model.GoalResponse;

import java.util.List;

public interface GoalRepository {

    List<GoalResponse> selectGoalList(GoalRequest request);

    GoalResponse selectGoal(GoalRequest request);

    int insertGoal(GoalRequest request);

    int updateGoal(GoalRequest request);

    int deleteGoal(GoalRequest request);

}
