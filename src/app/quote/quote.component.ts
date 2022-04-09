import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from "../quote"

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote[]=[
  new Quote( 1, 'You are never too old to set another goal or to dream a new dream',' — Malala Yousafzai',1,0,new Date(2020,3,14)),
  new Quote(2, 'The greatest glory in living lies not in never falling, but in rising every time we fall.',' — Nelson Mandela', 0,0,new Date(2021,8,12)),
  new Quote(3,'Never let the fear of striking out keep you from playing the game.','— Babe Ruth',0,0,new Date(2018,9,12)),
  new Quote(4,'We all have problems. But it’s not what happens to us, [it’s] the choices we make after.','— Elizabeth Smart',0,0,new Date(2015,8,12))

]

 arr:number[]= this.quotes.map(quote=>quote.upvote)
 highest=Math.max(...this.arr)
 
 deleteQuote(isComplete: any, index: number){
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

  if (toDelete){
    this.quotes.splice(index,1)
  }
    
  }
}
addNewQuote(quote: Quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)
}
 

constructor() { }


  ngOnInit(): void {
  }

}
