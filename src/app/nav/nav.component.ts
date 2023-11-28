import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userForm!: FormGroup;

  topics = [
   " Angular" ,
    "React", 
    "svelte"
  ];
  ngOnInit(): void {
  }

}
