import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { BlogService } from './blog.service';

import { AppComponent } from './app.component';
import { BlogCreateComponent } from './components/blog-create/blog-create.component';
import { BlogEditComponent } from './components/blog-edit/blog-edit.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogShowComponent } from './components/blog-show/blog-show.component';
import { EntryCreateComponent } from './components/entry-create/entry-create.component';

const routes: Routes = [
  { path: 'blogs/create', component: BlogCreateComponent },
  { path: 'blogs/:id', component: BlogShowComponent },
  { path: 'edit/:id', component: BlogEditComponent },
  { path: 'blogs', component: BlogListComponent },
  { path: 'blogs/:id/addentry', component: EntryCreateComponent },
  { path: '', redirectTo: 'blogs', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    BlogCreateComponent,
    BlogEditComponent,
    BlogListComponent,
    BlogShowComponent,
    EntryCreateComponent
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
