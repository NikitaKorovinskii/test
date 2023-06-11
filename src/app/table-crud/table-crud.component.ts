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
}
