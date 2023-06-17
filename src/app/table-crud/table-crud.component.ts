import {Component, OnInit} from '@angular/core';
import axios from 'axios';
import {Router} from "@angular/router";
import {delay} from "rxjs";
@Component({
  selector: 'app-table-crud',
  templateUrl: './table-crud.component.html',
  styleUrls: ['./table-crud.component.css']
})
export class TableCrudComponent implements OnInit  {
  entityList: any[] = []
  idNum = 0;
  p1: string = "";
  p2: string = "";
  p3: string = "";
  constructor(private route: Router) {}
  ngOnInit(): void {
    this.entityList = []
    axios.get('http://26.182.81.185:8080/main/getAllEntity1').then(response => {
      for (let i = 0; i < response.data.list.length; i++) {
        this.entityList.push(response.data.list[i]);
      }
    })
  }

  //Удаление записи
  remove(id: number) {
    this.entityList = []
    axios.delete('http://26.182.81.185:8080/main/deleteEntity1ById/'+id).then(response=> {
      if (response.status == 200){
        this.ngOnInit()
      }
      else {
        alert("Ошибка!")
      }
    })
  }

  //Добавление записи
  addEntity(p1: string, p2: string,p3: string) {
    axios.post('http://26.182.81.185:8080/main/addEntity1', {
      p1: p1,
      p2: p2,
      p3: p3
    }).then(response=>{
      console.log(response)
      this.entityList.push(response.data)
    })
    this.p1 = ""
    this.p2 = ""
    this.p3 = ""

  }
}
