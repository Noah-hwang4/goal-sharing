package com.basic.goalsharing.api.goal.repository;

import com.basic.goalsharing.api.goal.model.Goal;
import com.basic.goalsharing.api.goal.model.GoalRequest;
import com.basic.goalsharing.api.goal.model.GoalResponse;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class GoalRepositoryImp extends QuerydslRepositorySupport implements GoalRepository {

    private GoalJpaRepository jpaRepository;

    public GoalRepositoryImp(GoalJpaRepository jpaRepository) {
        super(Goal.class);
        this.jpaRepository = jpaRepository;
    }

    @Override
    public List<GoalResponse> selectGoalList(GoalRequest request) {
        return jpaRepository.selectGoalList(request);
    }

    @Override
    public GoalResponse selectGoal(GoalRequest request) {
        return null;
    }

    @Override
    public int insertGoal(GoalRequest request) {
        Goal goal = Goal.builder()
                .id(request.getId())
                .title(request.getTitle())
                .contents(request.getContents())
                .registrant(request.getRegistrant())
                .build();

        jpaRepository.save(goal);
        return 0;
    }

    @Override
    public int updateGoal(GoalRequest request) {
        return 0;
    }

    @Override
    public int deleteGoal(GoalRequest request) {
        return 0;
    }

    @Override
    public int updateAttainment(GoalRequest request) {
        return jpaRepository.updateAttainment(request.getIsAttainment(), request.getId());
    }

}
