import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-galeries',
    templateUrl: './galeries.component.html',
    styleUrls: ['./galeries.component.scss']
})
export class GaleriesComponent implements OnInit {

    public items = [
        {
            img: '/assets/images/portfolio/IMG_9749.jpg',
            alt: 'IMG_9749',
            place: 'Château de la Perquette',
            country: 'France',
            couple: 'Anaïs & Jeremy',
            url: '24-07-2021_chateau-perquette'
        },
        {
            img: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            alt: 'IMG_9749',
            place: 'Château de la Perquette',
            country: 'France',
            couple: 'Anaïs & Jeremy',
            url: '24-07-2021_chateau-perquette'
        },
        // {
        //     img: 'https://images.unsplash.com/photo-1573676048035-9c2a72b6a12a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
        //     alt: 'IMG_9749',
        //     place: 'Château de la Perquette',
        //     country: 'France',
        //     couple: 'Anaïs & Jeremy',
        //     url: '24-07-2021_chateau-perquette'
        // }
    ]

    constructor(
        private readonly _router: Router,
        private readonly _route: ActivatedRoute
    ) { }

    ngOnInit(): void {
    }

    navigateTo(url: string): void {
        this._router.navigate([url], { relativeTo: this._route });
    }

}
