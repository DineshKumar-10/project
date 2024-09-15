 import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

formdata :Fruit={
  id: 0,
  name: '',
  price: 0,
  quantity: 0
}

  constructor (private fruitser:FruitService,private router:Router,private rout:ActivatedRoute){}

  ngOnInit(): void {
      this.rout.paramMap.subscribe ( (param) =>{
        let id =Number(param.get('id'))
        this.getByid(id)
      })
  }

  getByid(id : number){
    this.fruitser.edit(id).subscribe( (data) =>{
this.formdata=data;
    })
  }

  update(){
    this.fruitser.update(this.formdata).subscribe( {
      next:(data) =>{
        this.router.navigate(["./fruit/home"])
      },
      error:(er) =>{
        console.log(Error)
      }
    })
  }

}
