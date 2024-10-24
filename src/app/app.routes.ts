import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./common/home/home.component').then((m) => m.HomeComponent),
  },

  {
    path: 'ai-app',
    loadComponent: () =>
      import('./features/ai-app/ai-app.component').then(
        (m) => m.AiAppComponent
      ),
  },
];
