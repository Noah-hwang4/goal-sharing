package com.basic.goalsharing.goal.dto;

import com.basic.goalsharing.goal.Goal;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class GoalListResponseDto {

    private Long id;
    private String title;
    private String content;
    private String author;
    private int isAttainment;

    public GoalListResponseDto(Goal entity) {
        id = entity.getId();
        title = entity.getTitle();
        content = entity.getContent();
        author = entity.getAuthor();
        isAttainment = entity.getIsAttainment();
    }

}
