import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, signal, Inject, PLATFORM_ID } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { FooterComponent } from '@app/shared/components/footer/footer.component';
import { HeaderComponent } from '@app/shared/components/header/header.component';
import { ROUTING } from 'src/app/shared/consts/consts';
import { ROUTES } from 'src/app/shared/consts/routes';

interface Step {
  id?: string;
  title?: string;
  illustration?: string;
}

enum EStep {
  CONSULTATION = '01',
  FIANCAILLE = '02',
  PLANNING = '03',
  DISCRET = '04',
  MOMENTS = '05',
  GROUPE = '06',
  RETOUCHE = '07',
  AFTER = '08'
}

@Component({
    selector: 'app-caen',
    imports: [HeaderComponent, FooterComponent, CommonModule, MatExpansionModule],
    templateUrl: './caen.component.html',
    styleUrls: ['./caen.component.scss']
})
export class CaenComponent implements AfterViewInit {
  public readonly ROUTING = ROUTING;
  public readonly linkDayAfter = `/blogs/${ROUTES.Article_2023_07_02_01}`;
  public readonly linkChoosePhotographer = `/blogs/${ROUTES.Article_2023_03_16_01}`;
  public readonly linkWeddingKit = `/blogs/${ROUTES.Article_2023_08_29_01}`;
  public readonly EStep = EStep;
  public readonly steps: Step[] = [
    {
      id: EStep.CONSULTATION,
      title: 'Consultation personnalisée',
      illustration: 'https://i.postimg.cc/fTnbRxTr/consultation-personnalisee.webp'
    },
    {
      id: EStep.FIANCAILLE,
      title: 'Séance Fiançaille',
      illustration: 'https://i.postimg.cc/PJkkTQzb/seance-photo-fiancaille.webp'
    },
    {
      id: EStep.PLANNING,
      title: 'Planification',
      illustration: 'https://i.postimg.cc/MKKFRLTM/planification-des-moments-clefs.webp'
    },
    {
      id: EStep.DISCRET,
      title: 'Reportage discret',
      illustration: 'https://i.postimg.cc/BnRYrQCH/service-reportage-photo-discret.webp'
    },
    {
      id: EStep.MOMENTS,
      title: 'photographie de moments clés',
      illustration: 'https://i.postimg.cc/XNgPrWV6/photographie-de-moments-clefs.webp'
    },
    {
      id: EStep.GROUPE,
      title: 'Portraits de couple et photos de groupe',
      illustration: 'https://i.postimg.cc/8PKnbbJy/portraits-couple-et-photos-de-groupe.webp'
    },
    {
      id: EStep.RETOUCHE,
      title: 'Retouche et livraison des photos',
      illustration: 'https://i.postimg.cc/xdHxnDs7/retouche-et-livraison-des-photos.webp'
    },
    {
      id: EStep.AFTER,
      title: 'Séance day after',
      illustration: 'https://i.postimg.cc/CxRrrfbw/seance-photo-day-after.webp'
    }
  ];
  public isBrowser = signal(false);

  public selectedStep?: Step = this.steps[0];
  public selectedStepIndex = 0;

  constructor(
    private readonly router: Router,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser.set(isPlatformBrowser(platformId));
  }

  public ngAfterViewInit(): void {
    this.changeStep();
  }

  private changeStep(): void {
    const INTERVAL = 1500;
    if (this.isBrowser()) {
      setInterval(() => {
        this.selectedStepIndex = this.selectedStepIndex < this.steps.length - 1 ? this.selectedStepIndex + 1 : 0;
        this.selectedStep = this.steps[this.selectedStepIndex];
      }, INTERVAL);
    }
  }

  public navigate(url: string): void {
    this.router.navigate([url]);
  }

  public getStep(id: EStep): Step | undefined {
    return this.steps?.find((step) => step?.id === id);
  }
}
