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

@Injectable({
  providedIn: 'root',
})
export class TestResolver implements Resolve<ListItem[]> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ListItem[]> {
    console.error('ADD global loading');
    return of(items).pipe(delay(3000));
  }
}
