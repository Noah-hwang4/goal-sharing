package com.basic.goalsharing.api.goal.service;

import com.basic.goalsharing.api.goal.model.GoalRequest;
import com.basic.goalsharing.api.goal.model.GoalResponse;
import java.util.List;

public interface GoalService {

    List<GoalResponse> getGoalList(GoalRequest request);

    GoalResponse getGoal(GoalRequest request);

    int saveGoal(GoalRequest request);

    int saveAttainment(GoalRequest request);

    int deleteGoal(GoalRequest request);

}
