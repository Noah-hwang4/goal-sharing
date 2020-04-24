package com.basic.goalsharing.controller.web;

import com.basic.goalsharing.api.goal.model.GoalRequest;
import com.basic.goalsharing.api.goal.service.GoalService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class GoalController {

    private final GoalService service;

    @GetMapping("/goal")
    public List<?> getGoalList(GoalRequest request){
        return service.getGoalList(request);
    }

    @PostMapping("/goal")
    public void saveGoal(@RequestBody GoalRequest request){
        service.saveGoal(request);
    }

}
