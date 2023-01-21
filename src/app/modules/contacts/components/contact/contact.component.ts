import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EInfoBox } from 'src/app/shared/components/infobox/infobox.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public form: FormGroup;
  public loading: boolean;
  public error: boolean;
  public EInfoBox = EInfoBox;

  constructor(
    private http: HttpClient,
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.form = this._formBuilder.group({
      name: [null],
      lastname: [null],
      email: [null],
      phone: [null],
      city: [null],
      weddingDate: [null],
      place: [null],
      message: [null],
    });

    this.loading = false;
    this.error = false;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.loading = true;
      this.error = false;
      const email = this.form.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http
        .post(
          'https://formspree.io/xyyvnyej',
          { name: email.name, replyto: email.email, ...email },
          { headers: headers }
        )
        .subscribe({
          next: () => {
            this.gotoTop();
            this.loading = false;
            this.openSnackBar('Le formulaire a été envoyé avec succès', 'X');
          },
          error: () => {
            this.gotoTop();
            this.loading = false;
            this.error = true;
          },
        });
    }
  }
}
