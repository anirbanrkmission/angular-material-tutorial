import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  like_count : number = 0

  constructor() { }

  ngOnInit(): void {
  }

  increaseLike () : void {
    this.like_count = 1
  }

  isDisable() : boolean {
    return this.like_count==1
  }

}
