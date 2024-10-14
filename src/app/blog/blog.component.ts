import { Component, OnInit } from '@angular/core';

interface BlogPost {
  title: string;
  date: string;
  content: string;
  imageUrl: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor() {}

  ngOnInit(): void {
    this.blogPosts = [
      {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus',
        date: '02/10/2024',
        content: 'Descrição...',
        imageUrl: 'assets/blog/ai-future.jpg'
      },
      {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        date: '09/10/2024',
        content: 'Descrição...',
        imageUrl: 'assets/blog/programming-languages.jpg'
      },
    ];
  }
}
