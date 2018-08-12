import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-entry-create',
  templateUrl: './entry-create.component.html',
  styleUrls: ['./entry-create.component.css']
})
export class EntryCreateComponent implements OnInit {

	id: String;
	blog: any = {};
	createForm: FormGroup;

  constructor(
  	private blogService: BlogService,
  	private fb: FormBuilder,
  	private router: Router,
		private route: ActivatedRoute
  ) {
  	this.createForm = this.fb.group({
  		title: ['', Validators.required],
  		content: ['', Validators.required]
  	});
  }

  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.id = params.id;
  		this.blogService
  			.getBlogById(this.id)
  			.subscribe((res) => {
	  			this.blog = res;
  		});
  	});
  }

  createEntry(title, content) {
  	this.blogService
      .createEntry(this.id, title, content)
      .subscribe(data => {
      	this.router.navigate([`/blogs/${this.id}`]);
      },
      err => {
        alert(err.error);
    });
  }
}
