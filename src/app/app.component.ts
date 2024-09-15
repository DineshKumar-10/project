import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // standalone : true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // imports: [FormsModule]
})
export class AppComponent  {
  title = 'project';
  hig='';


  fName='dinesh';
  lName = 'kumar';

  name="Angular test";

  getname(){
    return this.name
  }

  getmax(first : number,second : number ,third : number){
    return Math.max(first ,second ,third)
  }

  color='red';



  
  heig(){
    return Math.max()
  }
}
