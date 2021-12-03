import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'healthcare';

  constructor(private _router: Router) {}

  SignIn() {
    const model = {
      name: 'Samat',
      token: 'asdkjgasdjhgashjydgajhsdghjasgdjhasgd',
    };

    sessionStorage.setItem('auth', JSON.stringify(model));

    this._router.navigate(['list']);
  }
}
