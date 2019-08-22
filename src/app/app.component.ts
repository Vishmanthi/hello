import { Component,OnInit} from '@angular/core';
import { BusinessService } from './business.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  resumeForm:FormGroup;

  constructor(private ser:BusinessService){}
  //todoForm: new FormGroup()
  ngOnInit(){
    this.ser.getPeople().subscribe(res=>{
      this.people=res;
      this.initForm();
      console.log(this.people);
    })
  }

  private initForm(){
    let firstName="";
    let lastName="";

    this.resumeForm=new FormGroup({
      'name':new FormControl(firstName,Validators.required),
      'imagePath':new FormControl(lastName,Validators.required)
     
    });

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
