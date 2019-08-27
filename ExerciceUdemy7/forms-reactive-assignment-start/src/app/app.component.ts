import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  projectStatusArray = ['Stable', 'Critical', 'Finished'];
  forbiddenProjectName = 'Test';

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null,
        [Validators.required/*, this.forbiddenProjectNameValidator.bind(this)*/], this.forbiddenProjectNameValidatorAsync.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(this.projectStatusArray[0], [])
    });
  }

  onSubmit() {
    console.log(this.projectForm);
    this.projectForm.reset({'projectStatus': this.projectStatusArray[0]});
  }

  forbiddenProjectNameValidator(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenProjectName === control.value) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenProjectNameValidatorAsync(control: FormControl): Observable<any> | Promise<any> {
    const promise = new Promise<any> ((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenProjectName === control.value) {
          resolve({'nameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 3000);
    });
    return promise;
  }
}
