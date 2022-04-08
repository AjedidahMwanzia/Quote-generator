import { Component, OnInit } from '@angular/core';
import {Quote} from "../quote"

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote[]=[
  new Quote( 1, 'You are never too old to set another goal or to dream a new dream',' Malala Yousafzai',0,0),
  new Quote(2, 'For me, becoming isn’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn’t end.',' Michelle Obama', 0,0),
  new Quote(3,'I have learned over the years that when one’s mind is made up, this diminishes fear; knowing what must be done does away with fear.','— Rosa Parks',0,0),
  new Quote(4,'We all have problems. But it’s not what happens to us, [it’s] the choices we make after.','Elizabeth Smart',0,0)

]
  constructor() { }

  ngOnInit(): void {
  }

}
