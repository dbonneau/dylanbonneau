import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('WindowToken', {
  factory: (): Window => {
    return typeof window === 'undefined' ? new Window() : window;
  }
});
