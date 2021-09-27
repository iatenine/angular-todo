import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent implements OnInit {
  // Set a base URL for requests
  readonly BASE_URL: string = 'https://jsonplaceholder.typicode.com';
  posts: any;

  // Inject http client into constructor
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.posts = this.http.get(`${this.BASE_URL}/todos`);
  }
}
