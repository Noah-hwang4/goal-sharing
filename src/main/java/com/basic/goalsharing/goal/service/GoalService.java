package com.basic.goalsharing.goal.service;

import com.basic.goalsharing.goal.GoalRepository;
import com.basic.goalsharing.goal.dto.GoalListResponseDto;
import com.basic.goalsharing.goal.dto.GoalSaveRequestDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class GoalService {

    private GoalRepository goalRepository;

    @Transactional
    public Long save(GoalSaveRequestDto dto){
        return goalRepository.save(dto.toEntity()).getId();
    }

    @Transactional(readOnly = true)
    public List<GoalListResponseDto> findAllDesc() {
        return goalRepository.findAllDesc()
                .map(GoalListResponseDto::new)
                .collect(Collectors.toList());
    }

}
