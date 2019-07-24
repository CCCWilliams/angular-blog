import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Post';
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyBlVbKl5UfVJeZpCqf9pkWB5SevS_uRAzw",
      authDomain: "my-post-abe37.firebaseapp.com",
      databaseURL: "https://my-post-abe37.firebaseio.com",
      projectId: "my-post-abe37",
      storageBucket: "",
      messagingSenderId: "967119521460",
      appId: "1:967119521460:web:984ed3faaf85b342"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
