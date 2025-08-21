import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../../shared/components/navbar/navbar.component";
import { TopComponent } from "../../../../shared/components/top-header/top/top.component";
import { FooterComponent } from "../../../../shared/components/footer/footer/footer.component";

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, NavbarComponent, TopComponent, FooterComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
