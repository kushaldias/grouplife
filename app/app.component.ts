import { Component, enableProdMode } from '@angular/core';
import {TaskService} from './services/task.service';
import { User } from './user';
import { Dates } from './dates';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import {CalendarModule} from 'primeng/primeng';
enableProdMode();

@Component({
moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  providers:[TaskService]
})
export class AppComponent  {

date: DateModel;
options: DatePickerOptions;
private values: string;
private row1: string;
private row2: string;
private row3: string;
private row4: string;
private row5: string;
private row6: string;
private row7: string;
private row8: string;
private dateob: string;
private gen: string;
private sal: string;
public showpremium: boolean;
public showpremiumerr: boolean;
public loading: boolean = true;
public loadings: boolean = false;

constructor(private taskService:TaskService ){
  this.options = new DatePickerOptions();
    }


  details:User[];
  lol:Dates[];
  model = new User('', '', '');
   model2 = new Dates(null);
    
submitt(){
  this.loading = false;
  this.loadings = true;
    this.dateob = this.model.dob;
    this.gen = this.model.gender;
    this.sal = this.model.salary;
    console.log(this.dateob);
    
    var info = JSON.stringify({dob : this.model.dob, gender: this.model.gender, salary: this.model.salary}); 
    this.taskService.getinfo(info).subscribe(data => {
    if(data == '888')
    {
        this.values = 'Invalid Age';
        this.showpremiumerr = true;
        this.showpremium = false;
        this.loading = true;
  this.loadings = false;
    }
    else
    {
        this.values = data.i;
        this.row1 = data.a;
        this.row2 = data.b;
        this.row3 = data.c;
        this.row4 = data.d;
        this.row5 = data.e;
        this.row6 = data.f;
        this.row7 = data.g;
        this.row8 = data.h;
        console.log(this.values);
        this.showpremium = true;
        this.showpremiumerr = false;
        this.loading = true;
  this.loadings = false;
    }
    });
    
  }

}
