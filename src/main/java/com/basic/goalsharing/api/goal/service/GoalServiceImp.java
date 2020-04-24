package com.basic.goalsharing.api.goal.service;

import com.basic.goalsharing.api.goal.model.Goal;
import com.basic.goalsharing.api.goal.model.GoalRequest;
import com.basic.goalsharing.api.goal.model.GoalResponse;
import com.basic.goalsharing.api.goal.repository.GoalJpaRepository;
import com.basic.goalsharing.api.goal.repository.GoalRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GoalServiceImp implements GoalService {

    private final GoalRepository repository;

    @Override
    public List<GoalResponse> getGoalList(GoalRequest request) {
        return repository.selectGoalList(request);
    }

    @Override
    public GoalResponse getGoal(GoalRequest request) {
        return null;
    }

    @Override
    public int saveGoal(GoalRequest request) {
        return repository.insertGoal(request);
    }

    @Override
    public int deleteGoal(GoalRequest request) {
        return 0;
    }

}
