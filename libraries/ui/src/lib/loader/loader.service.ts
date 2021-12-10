import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private _loading = new BehaviorSubject<boolean>(false);

  constructor() {}

  getLoading() {
    return this._loading.asObservable();
  }

  setLoading(loading: boolean) {
    this._loading.next(loading);
  }
}
