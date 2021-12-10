import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { items, ListItem } from '../../models/list-item.model';
import { GetDataService } from '../services/get-data.service';

@Injectable({
  providedIn: 'root',
})
export class TestResolver implements Resolve<ListItem[]> {
  constructor(private _service: GetDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<ListItem[]> {
    return this._service.getData();
  }
}
