import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader.service';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule],
  exports: [LoaderComponent],
})
export class LoaderModule {
  static forRoot(): ModuleWithProviders<LoaderModuleForRoot> {
    return {
      ngModule: LoaderModuleForRoot,
    };
  }
}

@NgModule({
  declarations: [],
  imports: [LoaderModule],
  exports: [LoaderModule],
})
export class LoaderModuleForRoot {
  constructor(service: LoaderService) {}
}
