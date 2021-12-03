import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NoPrmPageComponent } from './no-prm-page/no-prm-page.component';

@NgModule({
  declarations: [PageNotFoundComponent, NoPrmPageComponent],
  imports: [CommonModule],
  exports: [PageNotFoundComponent, NoPrmPageComponent],
})
export class SharedModule {}
