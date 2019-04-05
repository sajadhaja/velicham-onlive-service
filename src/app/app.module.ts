import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PodcastComponent } from './podcast/podcast.component';
import { PodcastDetailComponent } from './podcast-detail/podcast-detail.component';
import { PodcastCreateComponent } from './podcast-create/podcast-create.component';
import { PodcastEditComponent } from './podcast-edit/podcast-edit.component';

const appRoutes: Routes = [
  {
    path: 'podcasts',
    component: PodcastComponent,
    data: { title: 'Podcast List' }
  },
  {
    path: 'podcast-details/:id',
    component: PodcastDetailComponent,
    data: { title: 'Podcast Details' }
  },
  {
    path: 'podcast-create',
    component: PodcastCreateComponent,
    data: { title: 'Create Podcast' }
  },
  {
    path: 'podcast-edit/:id',
    component: PodcastEditComponent,
    data: { title: 'Edit Podcast' }
  },
  { path: '',
    redirectTo: '/podcasts',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    PodcastComponent,
    PodcastDetailComponent,
    PodcastCreateComponent,
    PodcastEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
