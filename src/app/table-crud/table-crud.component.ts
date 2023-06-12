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
    axios.get('https://8f652dd8-e67b-4d9b-a03a-fe63fe7857df.mock.pstmn.io/get').then(response => {
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

  change(id: number,p1: string, p2: string,p3: string) {
    this.pressureList = []
    axios.post('https://8f652dd8-e67b-4d9b-a03a-fe63fe7857df.mock.pstmn.io/post', {
      id: id,
      p1: p1,
      p2: p2,
      p3: p3
    })
      .then(response => {
        for (let i = 0; i < response.data.list.length; i++) {
          this.pressureList.push(response.data.list[i]);
        }
      })


    this.p1 = ""
    this.p2 = ""
    this.p3 = ""

  }
}
