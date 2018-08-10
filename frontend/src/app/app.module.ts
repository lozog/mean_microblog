import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogCreateComponent } from './components/blog-create/blog-create.component';

import { BlogService } from './blog.service';
import { BlogEditComponent } from './components/blog-edit/blog-edit.component';

const routes: Routes = [
  { path: 'blogs/create', component: BlogCreateComponent },
  { path: 'edit/:id', component: BlogEditComponent },
  { path: 'blogs', component: BlogListComponent },
  { path: '', redirectTo: 'blogs', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogCreateComponent,
    BlogEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
