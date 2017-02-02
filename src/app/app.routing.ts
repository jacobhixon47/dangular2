import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageBoardComponent } from './message-board/message-board.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ResourcesComponent } from './resources/resources.component'
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'posts',
    component: MessageBoardComponent
  },
  {
    path: 'glossary',
    component: GlossaryComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  },
  {
    path: 'resources',
    component: ResourcesComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
