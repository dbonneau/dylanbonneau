import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public form: FormGroup;

  constructor(private http: HttpClient, private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
        name: [null],
        lastname: [null],
        email: [null],
        phone: [null],
        city: [null],
        weddingDate: [null],
        place: [null],
        message: [null]
    })
  }

  onSubmit() {
    if (this.form.valid) {
      const email = this.form.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http
        .post(
          'https://formspree.io/xyyvnyej',
          { name: email.name, replyto: email.email, ...email },
          { headers: headers }
        )
        .subscribe((response) => {
          console.log(response);
        });
    }
  }
}
