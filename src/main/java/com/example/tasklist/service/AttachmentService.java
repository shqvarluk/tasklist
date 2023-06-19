package com.example.tasklist.service;

import com.tasklist.domain.attachment.Attachment;

import java.util.List;

public interface AttachmentService {
    List<Attachment> getAllByTaskId(Long id);

    /*Attachment create (Attachment attachment, Long taskId);*/
    void delete (Long id);

}
