import { Component } from '@angular/core';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { TopComponent } from "../../../shared/components/top-header/top/top.component";
import { FooterComponent } from "../../../shared/components/footer/footer/footer.component";

@Component({
  selector: 'app-user',
  imports: [NavbarComponent, RouterOutlet, TopComponent, FooterComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export default class AuthComponent {

}
