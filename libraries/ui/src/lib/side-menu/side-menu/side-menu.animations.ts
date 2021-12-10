import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

const openCLoseAnimation = trigger('openClose', [
  state(
    'open',
    style({
      width: '400px',
      transform: 'translate3d(0,0,0)',
      paddingRight: '40px',
    })
  ),
  state(
    'close',
    style({
      width: 0,
      transform: 'translate3d(-100%, 0, 0)',
    })
  ),
  transition('open => close', animate('400ms ease-in-out')),
  transition('close => open', animate('400ms ease-in-out')),
]);

export const SIDE_MENU_ANIMATIONS = [openCLoseAnimation];
