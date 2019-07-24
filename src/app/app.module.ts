import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { HeaderComponent } from './header/header.component';
import { NewPostComponent } from './new-post/new-post.component';
import {PostService} from './services/post.service';
import {Route, RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { Error404Component } from './error404/error404.component';


const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'posts/add', component: NewPostComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path : 'not-found' , component: Error404Component},
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    HeaderComponent,
    NewPostComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
