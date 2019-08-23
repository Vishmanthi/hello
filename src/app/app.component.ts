import { Component,OnInit} from '@angular/core';
import { BusinessService } from './business.service';
import {Pupil} from './pupil';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
  
})
export class AppComponent {
  todoArray=[];
  people;
  todo;
  myvar;
  p:Pupil;

  constructor(private ser:BusinessService){}
  //todoForm: new FormGroup()
  ngOnInit(){
    this.ser.getPeople().subscribe(res=>{
      this.people=res;
   
      console.log(this.people);
    })
  }
  register(form) {
    this.ser.postPeople(form.value).subscribe((news: Pupil)=>{
      console.log("Record created, ", news);
    });
    
    
  }

  deleteMem(id){
    console.log(id);
    this.ser.deletePupil(id).subscribe((id:number)=>{
      console.log(id);
    })
  }
  

   addTodo(value){
    if(value!==""){
     this.todoArray.push(value)
    //console.log(this.todo) 
  }else{
    alert('Field required **')
  }
    
  }

  /*delete item*/
  deleteItem(todo){
  	for(let i=0 ;i<= this.todoArray.length ;i++){
  		if(todo== this.todoArray[i]){
  			this.todoArray.splice(i,1)
  		}
  	}
  }
  onClick(){
    this.ser.getString().subscribe(res=>{
      this.myvar=res;
    });
  }
  // submit Form
  todoSubmit(value:any){
     if(value!==""){
    this.todoArray.push(value.todo)
    //this.todoForm.reset()
    }else{
      alert('Field required **')
    }
    
  }
 
}
