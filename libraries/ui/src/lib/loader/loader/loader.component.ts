import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'ui-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  show = false;

  destroyed = new Subject<boolean>();

  constructor(private _service: LoaderService) {}

  ngOnInit(): void {
    this._service
      .getLoading()
      .pipe(takeUntil(this.destroyed))
      .subscribe((data) => {
        this.show = data;
      });
  }

  ngOnDestroy(): void {
    this.destroyed.next(true);
  }
}
