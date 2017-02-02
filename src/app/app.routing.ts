import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageBoardComponent } from './message-board/message-board.component';
import { ResourcesComponent } from './resources/resources.component'

const appRoutes: Routes = [

  {
    path: '',
    component: MessageBoardComponent
  },
  {
    path: 'resources',
    component: ResourcesComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
