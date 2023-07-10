import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from '../../services/data.service';
const materials = [MatCardModule, MatButtonModule, MatIconModule];

@Component({
  selector: 'nx-angular-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, ...materials, NgOptimizedImage],
})
export class HomeComponent implements OnInit {
  #dataService = inject(DataService);
  posts: { userId: number; id: number; title: string; body: string }[] = [];
  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    this.#dataService.getPost().subscribe((posts) => {
      this.posts = posts
    });
  }
}
