import { AnimationTriggerMetadata, trigger, transition, style, animate } from '@angular/animations';
import { MENU_SIZE, SIDEBAR_SIZE } from '@consts/consts';

export class ToggleMenu {
    static getAnimations(animationTransition: string): Array<AnimationTriggerMetadata> {
        return [
            trigger('menuAnimation', [
                transition(':enter', [
                    style({ left: -(MENU_SIZE + SIDEBAR_SIZE) }),
                    animate(
                        animationTransition,
                        style({ left: MENU_SIZE })
                    )
                ]),
                transition(':leave', [
                    style({ left: MENU_SIZE }),
                    animate(
                        animationTransition,
                        style({ left: -(MENU_SIZE + SIDEBAR_SIZE) })
                    )
                ])
            ])
        ];
    }
}
export class BackdropFade {
    static getAnimations(animationTransition: string): Array<AnimationTriggerMetadata> {
        return [
            trigger('backdropAnimation', [
                transition(':enter', [
                    style({ opacity: 0 }),
                    animate(
                        animationTransition,
                        style({ opacity: 1 })
                    )
                ]),
                transition(':leave', [
                    style({ opacity: 1 }),
                    animate(
                        animationTransition,
                        style({ opacity: 0 })
                    )
                ])
            ])
        ];
    }
}
