package com.example.tasklist.web.controller;


import com.example.tasklist.domain.user.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MainController {

    @GetMapping("/Auth")
    public String showAuth(){
        return "Auth";
    }

    @GetMapping("/About")
    public String showAbout(){
        return "About";
    }
    @GetMapping("Admin/About")
    public String showAboutAdmin(){
        return "Admin/About";
    }

    @GetMapping("Admin/Profile")
    public String showProfileAdmin(){
        return "Admin/Profile";
    }

    @GetMapping("User/About")
    public String showAboutUser(){
        return "User/About";
    }

    @GetMapping("User/Profile")
    public String showProfileUser(){
        return "User/Profile";
    }

    @GetMapping("/Admin/Tasks")
    public String showTasksAdmin(){
        return "Admin/Tasks";
    }
    @PostMapping ("/createTask")
    public String createTask(){
        return "redirect:/Admin/Task";
    }

    @GetMapping("/Register")
    public String showRegister(){
        return "Register";
    }

    @PostMapping("/check")
    public String checkUser(User user){
        if (user.getUsername().equals("admin") && user.getPassword().equals("admin")){
            return "redirect:/Admin/Profile";
        } else if (user.getUsername().equals("user") && user.getPassword().equals("user")){
            return "redirect:/User/Profile";
        }
        return "Auth";
    }

    @PostMapping("/logout")
    public String logout(){
        return "redirect:/Auth";
    }
}
