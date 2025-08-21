import { Component } from '@angular/core';
import { OptionsComponent } from "../../delivery/options/options.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [OptionsComponent,RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
