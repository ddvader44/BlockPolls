import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PollForm } from '../types';

@Component({
  selector: 'app-poll-create',
  templateUrl: './poll-create.component.html',
  styleUrls: ['./poll-create.component.scss']
})
export class PollCreateComponent {

  pollForm: FormGroup; // group storing inputs

  @Output() pollCreated : EventEmitter<PollForm> = new EventEmitter();

  constructor(private fb: FormBuilder) {

    this.pollForm = this.fb.group({
      question: this.fb.control("",[Validators.required]), //first parameter, initialized by empty string and validated(required or not)
      image: this.fb.control(""), // no need of validation, you can choose to leave it empty
      op1: this.fb.control(""),
      op2: this.fb.control(""),
      op3: this.fb.control(""),
    });
   }

   submitForm(){
     const formData: PollForm = {
       question : this.pollForm.get("question").value,
       thumbnail: this.pollForm.get("image").value,
       options : [
         this.pollForm.get("op1").value,
         this.pollForm.get("op2").value,
         this.pollForm.get("op3").value
       ]
     };

     this.pollCreated.emit(formData);

   }

}
