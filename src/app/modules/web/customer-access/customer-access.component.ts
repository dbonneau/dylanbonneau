import { Component, inject, OnInit, signal } from '@angular/core';
import { LumysService } from '@app/core/services/lumys.service';
import { SpinnerComponent } from '@app/shared/components';

@Component({
  selector: 'app-customer-access',
  imports: [SpinnerComponent],
  templateUrl: './customer-access.component.html',
  styleUrl: './customer-access.component.scss'
})
export class CustomerAccessComponent implements OnInit {
  public loading = signal<boolean>(false);
  public galleries = signal<any | undefined>(undefined);

  protected readonly lumysService = inject(LumysService);

  public ngOnInit(): void {
    this.getLumisData();
  }

  private getLumisData(): void {
    this.loading.set(true);
    this.lumysService.getLumisData().subscribe((response) => {
      this.loading.set(false);
      this.galleries.set(response);
    });
  }
}
