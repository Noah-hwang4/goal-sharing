package com.basic.goalsharing.api.goal.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GoalResponse {

    private Long id;
    private String title;
    private String contents;
    private String registrant;
    private int isAttainment;
    private Long memberId;

    public GoalResponse(Goal goal) {
        id = goal.getId();
        title = goal.getTitle();
        contents = goal.getContents();
        registrant = goal.getRegistrant();
        isAttainment = goal.getIsAttainment();
    }

}
