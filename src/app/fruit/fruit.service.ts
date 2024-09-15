import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  myApi='http://localhost:3000/fruits';
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Fruit[]>('http://localhost:3000/fruits')
  };

  creat(data :Fruit){
    return this.http.post('http://localhost:3000/fruits', data);
  };

  edit(id :number){
    return this.http.get<any>(`http://localhost:3000/fruits/${id}`);
  };
  update(data:Fruit){
    return this.http.put<Fruit>(`http://localhost:3000/fruits/${data.id}`,data)
  };
  delete(id :number){
    return this.http.delete<any>(`http://localhost:3000/fruits/${id}`);
  }

}
