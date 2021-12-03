import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoPrmPageComponent } from './shared/no-prm-page/no-prm-page.component';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: () =>
      import('./list/list.module').then((mod) => mod.ListModule),
    canLoad: [AuthGuard],
    data: {
      title: 'Лист',
      hasBreadcrumb: true,
      breadCrumbTitle: 'Лист',
      id: 0,
      url: '/list',
    },
  },
  {
    path: '403',
    component: NoPrmPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
