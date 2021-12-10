import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostBinding,
  Input,
} from '@angular/core';
import { SIDE_MENU_ANIMATIONS } from './side-menu.animations';

@Component({
  selector: 'ui-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  animations: SIDE_MENU_ANIMATIONS,
})
export class SideMenuComponent implements OnInit {
  @HostBinding('@openClose') state: 'close' | 'open' = 'close';

  private _show: boolean = false;

  public get show(): boolean {
    return this._show;
  }

  @Input() public set show(v: boolean) {
    this._show = v;
    if (v) {
      this.state = 'open';
      return;
    }
    this.state = 'close';
  }

  constructor() {}

  ngOnInit(): void {}
}
