import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Blog } from '../../blog.model';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-entry-show',
  templateUrl: './entry-show.component.html',
  styleUrls: ['./entry-show.component.css']
})
export class EntryShowComponent implements OnInit {

	id: String;
	blog_id: String;
	entry: any = {};

  constructor(
  	private blogService: BlogService,
  	private router: Router,
  	private route: ActivatedRoute
  ) { }

  ngOnInit() {
  	this.fetchEntry();
  }

  fetchEntry() {
  	this.route.params.subscribe(params => {
  		this.id = params.id;
  		this.blog_id = params.blog_id;
  		this.blogService
  			.getEntryById(this.blog_id, this.id)
  			.subscribe((res) => {
  				this.entry = res;
  		});
  	});
  }
}
