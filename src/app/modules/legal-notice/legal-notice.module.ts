import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';
import { LegalNoticeRoutingModule } from './legal-notice-routing.module';

@NgModule({
  declarations: [LegalNoticeComponent],
  imports: [
    CommonModule,
    RouterModule,
    HighlightModule,
    ReactiveFormsModule,
    SharedModule,
    LegalNoticeRoutingModule,
  ],
})
export class LegalNoticeModule {}
