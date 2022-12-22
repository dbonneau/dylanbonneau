import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gallery } from 'src/app/core/models/gallery.model';
import { AirtableService } from 'src/app/core/services/airtable.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public weddingId: string;
  public gallery: Gallery;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _airtableService: AirtableService
  ) {
    this.weddingId = this._route.snapshot.paramMap.get('weddingId') ?? '';
    this.gallery = new Gallery();
  }

  ngOnInit(): void {
    this.getWedding();
  }

  getWedding() {
    this._airtableService
      .getWedding(this.weddingId)
      .subscribe((response: Gallery) => {
        this.gallery = response;
      });
  }
}
