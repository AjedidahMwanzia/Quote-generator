import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  [x: string]: any;
  @Input() 
  quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
 
  upvote(i: string | number) {
    this['Quote'][i].upvotes ++;
  }
  downvote(i: string | number) {
    this['Quote'][i].downvotes  ++;
  }

  constructor() { }
  
 
  ngOnInit(): void {
  }

}
