import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class SEOService {
    constructor(@Inject(DOCUMENT) private dom: any, private title: Title, private meta: Meta) { }


    updateTitle(title: string) {
        this.title.setTitle(title);
    }

    updateDescription(desc: string) {
        this.meta.updateTag({ name: 'description', content: desc })
    }

    createLinkForCanonicalURL(url?: string) {
        const head = this.dom.getElementsByTagName('head')[0];
        var element: HTMLLinkElement = this.dom.querySelector(`link[rel='canonical']`) || null
        if (element == null) {
            element = this.dom.createElement('link') as HTMLLinkElement;
            head.appendChild(element);
        }
        element.setAttribute('rel', 'canonical')
        element.setAttribute('href', url ?? this.dom.URL)
    }
}