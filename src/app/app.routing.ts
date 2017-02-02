import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageBoardComponent } from './message-board/message-board.component';
import { GlossaryComponent } from './glossary/glossary.component';

const appRoutes: Routes = [

  {
    path: 'message-board',
    component: MessageBoardComponent
  },
  {
    path: 'glossary',
    component: GlossaryComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
