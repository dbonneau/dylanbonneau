import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gallery } from 'src/app/core/models/gallery.model';
import { AirtableService } from 'src/app/core/services/airtable.service';

@Component({
  selector: 'app-galeries',
  templateUrl: './galeries.component.html',
  styleUrls: ['./galeries.component.scss'],
})
export class GaleriesComponent implements OnInit {
  public galleries: Gallery[];

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _airtableService: AirtableService
  ) {
    this.galleries = [];
  }

  ngOnInit(): void {
    this.getWeddings();
  }

  navigateTo(url: string): void {
    this._router.navigate([url], { relativeTo: this._route });
  }

  getWeddings() {
    this._airtableService.getWeddings().subscribe((response: Gallery[]) => {
        this.galleries = response;
    })
  }
}
