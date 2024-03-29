package com.example.tasklist.service.Impl;

import com.example.tasklist.domain.comment.Comment;
import com.example.tasklist.repository.CommentRepository;
import com.example.tasklist.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;
    @Override
    public List<Comment> getAllByTaskId(Long id) {
        return commentRepository.findAllById(id);
    }

    @Override
    public Comment create(Comment comment, Long taskId) {
        comment.setTaskId(taskId);
        commentRepository.save(comment);
        return comment;
    }
}
