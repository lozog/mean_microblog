import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Blog } from '../../blog.model';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

	id: String;
	blog: any = {};
	updateForm: FormGroup;

  constructor (
    private blogService:BlogService,
		private fb: FormBuilder,
		private router: Router,
		private route: ActivatedRoute
  ) {
  	this.createForm();
  }

  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.id = params.id;
  		this.blogService
  			.getBlogById(this.id)
  			.subscribe((res) => {
	  			this.blog = res;
	  			this.updateForm.get('title').setValue(this.blog.title);
  		});
  	});
  }

  createForm() {
  	this.updateForm = this.fb.group({
  		title: ['', Validators.required]
  	});
  }

  updateBlog(title) {
  	this.blogService
  		.updateBlog(this.id, title)
  		.subscribe(data => {
	  		alert("Blog updated successfully");
				this.router.navigate(['/blogs']);
  	  },
      err => {
        alert(err.error);
    });
  }
}
