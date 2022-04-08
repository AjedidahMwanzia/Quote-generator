export class Quote {

    constructor(public id:number, public quote:string,public details:string,public upvote:number,public downvote:number, ){
        this.id =id;
        this.quote = quote
        this.details = details
        this.upvote = upvote;
        this.downvote = downvote;
      
    }
}
