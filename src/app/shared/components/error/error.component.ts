import { Component, OnInit, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
   @Input() error:ValidationErrors ;

  constructor() { }

  ngOnInit(): void { 
    console.log('control asdas ',   this.error)
  }



  
}
