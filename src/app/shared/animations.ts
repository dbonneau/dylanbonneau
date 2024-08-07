import { AnimationTriggerMetadata, trigger, transition, style, animate } from '@angular/animations';

export class BackdropFade {
  public static getAnimations(animationTransition: string): Array<AnimationTriggerMetadata> {
    return [
      trigger('backdropAnimation', [
        transition(':enter', [style({ opacity: 0 }), animate(animationTransition, style({ opacity: 1 }))]),
        transition(':leave', [style({ opacity: 1 }), animate(animationTransition, style({ opacity: 0 }))])
      ])
    ];
  }
}
