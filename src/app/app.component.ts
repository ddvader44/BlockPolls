import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showForm = false;

  polls = [
    {
    question : "What do you like more, Pizza or Burger?",
    image : "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=625&q=80",
    votes: [4,5,0],
    voted : true,
  },
  {
    question : "Reservoir Dogs or OUATIH or Pulp Fiction",
    image : "https://images.unsplash.com/photo-1594073753319-df2a78cfd4e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    votes: [100,10,10],
    voted : false,
  }
];
}
