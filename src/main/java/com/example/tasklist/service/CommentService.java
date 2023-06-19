package com.example.tasklist.service;

import com.tasklist.domain.comment.Comment;

import java.util.List;

public interface CommentService {
    List<Comment> getAllByTaskId(Long id);

    Comment create (Comment comment, Long taskId);

}
