import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from "../quote"

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote[]=[
  new Quote( 1, 'You are never too old to set another goal or to dream a new dream',' — Malala Yousafzai',0,0),
  new Quote(2, 'The greatest glory in living lies not in never falling, but in rising every time we fall.',' — Nelson Mandela', 0,0),
  new Quote(3,'Never let the fear of striking out keep you from playing the game.','— Babe Ruth',0,0),
  new Quote(4,'We all have problems. But it’s not what happens to us, [it’s] the choices we make after.','— Elizabeth Smart',0,0)

]

 arr:number[]= this.quotes.map(quote=>quote.upvote)
 highest=Math.max(...this.arr)
 

constructor() { }


  ngOnInit(): void {
  }

}
