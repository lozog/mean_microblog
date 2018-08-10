import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

	createForm: FormGroup;

  constructor(private blogService: BlogService, private fb: FormBuilder, private router: Router) {
  	this.createForm = this.fb.group({
  		title: ['', Validators.required],
  	});
  }

  ngOnInit() {
  }

  createBlog(title) {
  	this.blogService
      .createBlog(title)
      .subscribe(data => {
      	this.router.navigate(['/blogs']);
      },
      err => {
        alert(err.error);
    });
  }
}
