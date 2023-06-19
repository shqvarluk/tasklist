package com.example.tasklist.service.Impl;

import com.tasklist.domain.attachment.Attachment;
import com.tasklist.repository.AttachmentRepository;
import com.tasklist.service.AttachmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AttachmentServiceImpl implements AttachmentService {

    private final AttachmentRepository attachmentRepository;

    @Override
    public List<Attachment> getAllByTaskId(Long id) {
        return attachmentRepository.findAllById(id);
    }

   /*@Override
    public Attachment create(Attachment attachment, Long taskId) {
        attachment.setTaskId(taskId);
        attachmentRepository.save(attachment);
        return attachment;
    }*/

    @Override
    public void delete(Long id) {
        attachmentRepository.deleteById(id);
    }
}
