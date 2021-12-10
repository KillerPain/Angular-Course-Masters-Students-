import { Injectable } from '@angular/core';
import { LoaderService } from 'libraries/ui/src/lib/loader/loader.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { items } from '../../models/list-item.model';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private _service: LoaderService) {}

  async getData() {
    this._service.setLoading(true);
    const promise = await of(items).pipe(delay(3000)).toPromise();
    this._service.setLoading(false);
    return promise;
  }
}
