import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
  agm-map {
    height: 300px;
  }
`],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'collectingDiscountInformationProjectFront';
}

