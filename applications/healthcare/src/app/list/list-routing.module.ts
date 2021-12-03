import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { ExitGuard } from '../guards/exit.guard';
import { TestResolver } from '../resolvers/test.resolver';
import { DescComponent } from './desc/desc.component';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'page',
        pathMatch: 'full',
      },
      {
        path: 'page',
        component: ListComponent,
        canDeactivate: [ExitGuard],
        resolve: {
          items: TestResolver,
        },
        data: {
          title: 'Страница',
          hasBreadcrumb: true,
          breadCrumbTitle: 'Страница',
          id: 0,
          url: '/list/page',
        },
      },
      {
        path: 'post',
        component: PostComponent,
        canActivateChild: [AuthGuard],
        data: {
          title: 'Пост',
          hasBreadcrumb: true,
          breadCrumbTitle: 'Пост',
          id: 0,
          url: '/list/post',
        },
        children: [
          {
            path: 'desc',
            component: DescComponent,
            data: {
              title: 'Описание',
              hasBreadcrumb: true,
              breadCrumbTitle: 'Описание',
              id: 0,
              url: '/list/post/dest',
            },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRoutingModule {}
