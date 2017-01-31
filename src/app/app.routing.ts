import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageBoardComponent } from './message-board/message-board.component';

const appRoutes: Routes = [

  {
    path: '',
    component: MessageBoardComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
