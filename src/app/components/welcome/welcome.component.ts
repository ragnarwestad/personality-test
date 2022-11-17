import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  @ViewChild('name') nameKey!: ElementRef;

  constructor() {
  }

  startTest(): void {
    localStorage.setItem("name", this.nameKey.nativeElement.value);
  }

}
