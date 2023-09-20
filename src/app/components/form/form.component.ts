import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormService} from "../../services/form/form.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  user: {
    name: string;
    email: string;
    profileImage: File | null;
  } = {
    name: '',
    email: '',
    profileImage: null
  };

  constructor(private formService: FormService) { }

  onSubmit(form: NgForm) {
    const formData: FormData = new FormData();

    formData.append('name', this.user.name);
    formData.append('email', this.user.email);
    if (this.user.profileImage) {
      formData.append('profileImage', this.user.profileImage, this.user.profileImage.name);
    }

    this.formService.submitForm(formData).subscribe(response => {
      console.log('Form submitted successfully', response);
    }, error => {
      console.error('Error submitting the form', error);
    });

    form.reset();
  }

  onFileSelected(file: File) {
    this.user.profileImage = file;
  }
}
