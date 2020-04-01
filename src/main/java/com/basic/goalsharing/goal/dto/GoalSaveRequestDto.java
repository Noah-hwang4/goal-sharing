package com.basic.goalsharing.goal.dto;

import com.basic.goalsharing.goal.Goal;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class GoalSaveRequestDto {

    private String title;
    private String content;
    private String author;

    public Goal toEntity(){
        return Goal.builder()
                .title(title)
                .content(content)
                .author(author)
                .build();
    }

}
