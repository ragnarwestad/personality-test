import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  name2: string = '';

  constructor(public router: Router) {

  }

  onSubmit(form: any) {
    console.log(form.value.name);
    localStorage.setItem("name", form.value.name);
    this.router.navigateByUrl('/question');
  }

}
