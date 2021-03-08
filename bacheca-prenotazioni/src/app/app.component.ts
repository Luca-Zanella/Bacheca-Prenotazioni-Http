import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'bacheca-prenotazioni';
  isShown: boolean = true ; // hidden by default
  


  toggleShow() {
    this.isShown = ! this.isShown;
    
    }


   
}
