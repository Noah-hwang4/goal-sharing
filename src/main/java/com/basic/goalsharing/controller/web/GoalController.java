package com.basic.goalsharing.controller.web;

import com.basic.goalsharing.api.goal.model.GoalRequest;
import com.basic.goalsharing.api.goal.service.GoalService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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

    @PutMapping("/goal/{id}")
    public void saveAttainment(@RequestBody GoalRequest request, @PathVariable Long id){
        request.setId(id);

        service.saveAttainment(request);
    }

}
