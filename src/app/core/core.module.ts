import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AirtableService } from './services/airtable.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AirtableService],
})
export class CoreModule {}
