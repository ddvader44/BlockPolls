import { Component } from '@angular/core';
import { Poll } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showForm = false;
  activePoll : Poll = null

  polls: Poll[] = [
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
];

  setActivePoll(poll){
  this.activePoll = null;
  setTimeout(() => {
    this.activePoll = poll;
  },100);
}

}
