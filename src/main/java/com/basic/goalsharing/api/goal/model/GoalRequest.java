package com.basic.goalsharing.api.goal.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GoalRequest {

    private Long id;
    private String title;
    private String contents;
    private String registrant;
    private int isAttainment;
    private Long memberId;

}
