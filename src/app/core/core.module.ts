import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AirtableService } from './services/airtable.service';
import { SEOService } from './services/seo.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AirtableService, SEOService],
})
export class CoreModule {}
