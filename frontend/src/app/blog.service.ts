import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

	uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getBlogList() {
  	return this.http.get(`${this.uri}/blogs`);
  }

  getBlogById(id) {
  	return this.http.get(`${this.uri}/blogs/${id}`);
  }

  createBlog(title) {
  	const blog = {
  		title: title
  	};
  	return this.http.post(`${this.uri}/blogs/add`, blog);
  }

  updateBlog(id, title) {
  	const blog = {
  		title: title
  	};
  	return this.http.post(`${this.uri}/blogs/update/${id}`, blog);
  }

  deleteBlog(id) {
  	return this.http.get(`${this.uri}/blogs/delete/${id}`);
  }
}