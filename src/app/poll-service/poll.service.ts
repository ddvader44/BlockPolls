import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Poll, PollForm } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor() { }

  getPolls() : Observable<Poll[]> {
    return of([
      {
      id: 1,
      question : "What do you like more, Pizza or Burger or Pasta",
      thumbnail : "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=625&q=80",
      results: [4,5,1],
      options : ["Pizza","Burger","Pasta"],
      voted : true,
    },
    {
      id: 2,
      question : "Reservoir Dogs or Kill Bill or Pulp Fiction",
      thumbnail : "https://images.unsplash.com/photo-1594073753319-df2a78cfd4e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      results: [100,10,10],
      options : ["Reservoir Dogs","Kill Bill","Pulp Fiction"],
      voted : false,
    }
  ]).pipe(delay(2000));
  }

  vote(pollId: number, voteNumber: number){
    console.log(pollId, voteNumber)
  }

  createPoll(poll :PollForm){
    console.log(poll);
  }

}
