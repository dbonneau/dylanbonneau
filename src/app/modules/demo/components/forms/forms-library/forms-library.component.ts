import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-forms-library',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, FormsModule, TranslateModule, HighlightModule, MatIconModule],
  templateUrl: './forms-library.component.html',
  styleUrls: ['./forms-library.component.scss']
})
export class FormsLibraryComponent {
  public formEmail = `<mat-form-field appearance="fill">
  <mat-label>Votre email</mat-label>
  <input matInput placeholder="vikkoder@example.com" formControlName="email">
  <mat-error *ngIf="form.get('email').invalid">Veuillez saisir une adresse email valide</mat-error>
</mat-form-field>`;

  public formPassword = `<mat-form-field appearance="fill">
<mat-label>Votre mot de passe</mat-label>
<input matInput [type]="hide ? 'password' : 'text'" placeholder="ZAEip0880##1" formControlName="password" autocomplete="on">
<button mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'"
  [attr.aria-pressed]="hide">
  <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
</button>
</mat-form-field>`;

  // Form
  public form: UntypedFormGroup;
  public submitted = false;
  public hide = false;

  constructor(private readonly fb: UntypedFormBuilder) {
    const formGroup = {
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    };
    this.form = this.fb.group(formGroup);
  }
}
