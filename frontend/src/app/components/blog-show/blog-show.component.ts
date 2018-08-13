import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Blog } from '../../blog.model';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-blog-show',
  templateUrl: './blog-show.component.html',
  styleUrls: ['./blog-show.component.css']
})
export class BlogShowComponent implements OnInit {

	id: String;
	blog: any = {};

  constructor (
  	private blogService: BlogService,
  	private router: Router,
  	private route: ActivatedRoute
  ) { }

  ngOnInit() {
  	this.fetchBlog();
  }

  fetchBlog() {
  	this.route.params.subscribe(params => {
  		this.id = params.id;
  		this.blogService
  			.getBlogById(this.id)
  			.subscribe((res) => {
  				this.blog = res;
  		});
  	});
  }

  showEntry(blog_id, entry_id) {
    this.router.navigate([`/blogs/${blog_id}/entry/${entry_id}`]);
  }

  deleteEntry(entry_id) {
    this.blogService
      .deleteEntry(this.id, entry_id)
      .subscribe(() => {
        this.fetchBlog();
    });
  }
}
