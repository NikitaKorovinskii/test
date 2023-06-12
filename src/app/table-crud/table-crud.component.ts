import {Component, OnInit} from '@angular/core';
import axios from 'axios';
import {Router} from "@angular/router";
@Component({
  selector: 'app-table-crud',
  templateUrl: './table-crud.component.html',
  styleUrls: ['./table-crud.component.css']
})
export class TableCrudComponent implements OnInit  {
  pressureList: any[] = []
  idNum = 0;
  p1: string = "";
  p2: string = "";
  p3: string = "";
  constructor(private route: Router) {}
  ngOnInit(): void {
    this.pressureList = []
    axios.get('http://26.182.81.185:8080/main/getAllEntity1').then(response => {
      for (let i = 0; i < response.data.list.length; i++) {
        this.pressureList.push(response.data.list[i]);
      }
    })
  }

  edit(id: number) {
  this.idNum = id-1
    console.log(this.idNum)

  }

  remove(id: number) {
    this.idNum = id-1
    console.log(this.idNum)
  }

  change(p1: string, p2: string,p3: string) {

    axios.post('http://26.182.81.185:8080/main/addEntity1', {
      p1: p1,
      p2: p2,
      p3: p3
    })

    this.ngOnInit()

    this.p1 = ""
    this.p2 = ""
    this.p3 = ""

  }
}
