import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [SideMenuComponent],
  imports: [CommonModule, CardModule],
  exports: [SideMenuComponent],
})
export class SideMenuModule {}
