package com.cybertron.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.cybertron.model.Contact;
import com.cybertron.repository.ContactRepository;



@RestController
@RequestMapping("/api/contact")
@CrossOrigin
public class ContactController {


@Autowired
private ContactRepository repository;



@PostMapping
public Contact saveContact(
@RequestBody Contact contact){

return repository.save(contact);

}



@GetMapping
public Object getAll(){

return repository.findAll();

}


}