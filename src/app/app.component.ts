import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./componets/header/header.component";
import { HomeComponent } from "./componets/home/home.component";
import { FooterComponent } from "./componets/footer/footer.component";
import { ProductComponent } from './componets/product/product.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, HomeComponent, FooterComponent, ProductComponent]
})
export class AppComponent {
  title = 'market';
}
