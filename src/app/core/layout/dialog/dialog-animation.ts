import { animate, style, transition, trigger } from '@angular/animations';

export const DialogAnimation = trigger('dialogAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(30px)' }),
    animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
  transition(':leave', [animate(1500, style({ opacity: 0 }))]),
]);
