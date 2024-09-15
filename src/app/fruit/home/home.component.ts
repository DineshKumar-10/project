import { Component ,OnInit } from '@angular/core';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

  allfruit: Fruit [] =[];
  constructor (private fruitser : FruitService){}

    ngOnInit () : void {
      this.fruitser.getAll().subscribe( (Data) =>  {
        this.allfruit=Data;
      })
    }

    deleteItem(id:number){
      this.fruitser.delete(id).subscribe( {
        next:(data) =>{
          this.allfruit=this.allfruit.filter(_ => _ .id !=id)
        },
      })
    }

}
