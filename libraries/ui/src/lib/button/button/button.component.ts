import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() color: string = 'primary';

  hover: boolean = false;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.hover = true;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.hover = false;
  }

  colors = new Map<string, string[]>()
    .set('primary', ['hsl(145, 63%, 49%)', 'hsl(145, 63%, 40%)'])
    .set('accent', ['hsl(190, 63%, 49%)', 'hsl(190, 63%, 40%)']);

  constructor() {}

  ngOnInit(): void {}

  public get Color(): string[] {
    const res = this.colors.get(this.color);
    if (res) {
      return res;
    }
    return [];
  }
}
