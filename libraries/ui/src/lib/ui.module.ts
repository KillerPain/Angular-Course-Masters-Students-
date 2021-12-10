import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { LoaderModule } from './loader/loader.module';
import { SideMenuModule } from './side-menu/side-menu.module';

@NgModule({
  declarations: [],
  imports: [ButtonModule, LoaderModule, SideMenuModule],
  exports: [ButtonModule, LoaderModule, SideMenuModule],
})
export class UiModule {}
