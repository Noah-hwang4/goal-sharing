package com.basic.goalsharing.web;

import com.basic.goalsharing.goal.dto.GoalSaveRequestDto;
import com.basic.goalsharing.goal.service.GoalService;
import lombok.AllArgsConstructor;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@AllArgsConstructor
public class WebRestController {

    private Environment env;
    private GoalService goalService;

    @GetMapping("/profile")
    public String getProfile () {
        return Arrays.stream(env.getActiveProfiles())
                .findFirst()
                .orElse("");
    }

    @PostMapping("/goal")
    public void saveGoal(@RequestBody GoalSaveRequestDto dto){
        goalService.save(dto);
    }

    @GetMapping("/goal")
    public List<?> getGoalList(){
        return goalService.findAllDesc();
    }

}
