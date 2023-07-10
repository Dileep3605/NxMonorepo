import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  http = inject(HttpClient);

  getPost() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get<
      { userId: number; id: number; title: string; body: string }[]
    >(url);
  }
}
