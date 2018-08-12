import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Blog } from '../../blog.model';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

	blogs: Blog[];

  constructor(private blogService:BlogService, private router: Router) { }

  ngOnInit() {
  	this.fetchBlogList();
  }

  fetchBlogList() {
  	this.blogService
  		.getBlogList()
  		.subscribe((data: Blog[]) => {
  			this.blogs = data;
  	});
  }

  showBlog(id) {
    this.router.navigate([`/blogs/${id}`]);
  }

  editBlog(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteBlog(id) {
  	this.blogService
  		.deleteBlog(id)
  		.subscribe(() => {
  			this.fetchBlogList();
  	});
  }
}
