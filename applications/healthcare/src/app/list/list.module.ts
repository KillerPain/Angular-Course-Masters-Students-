import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list/list.component';
import { PostComponent } from './post/post.component';
import { DescComponent } from './desc/desc.component';
import { LayoutComponent } from './layout/layout.component';
import { CardModule } from 'libraries/ui/src/lib/card/card.module';
import { ButtonModule } from 'libraries/ui/src/lib/button/button.module';
import { TextInputModule } from 'libraries/ui/src/lib/text-input';
import { SideMenuModule } from 'libraries/ui/src/lib/side-menu/side-menu.module';

@NgModule({
  declarations: [ListComponent, PostComponent, DescComponent, LayoutComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    CardModule,
    ButtonModule,
    TextInputModule,
    SideMenuModule,
  ],
})
export class ListModule {}
