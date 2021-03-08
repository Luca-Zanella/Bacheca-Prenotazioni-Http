import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //title = 'bacheca-prenotazioni';
  isShown: boolean = true ; // hidden by default

  data: Object;
  loading: boolean;
  o :Observable<Object>;
  


  toggleShow() {
    this.isShown = ! this.isShown;
    
    }

    constructor(public http: HttpClient){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

/*
    addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
      //andiamo ad aggiungere il titolo ed il link messo da noi e settiamo i votes a 0 come di consuetudine
      //e poi andiamo a settare a vuoto i parametri title e link così da permettere di scrivere altre cose e da non creare cose strane
      this.fooData.push(new Article(title.value, link.value,0));
      //console.log(this.fooData);
      //questo va fatto dopo averlo inserito nell'array perchè se no mi inserice il nulla se fatto dopo da spazio per essere occupato di nuovo
      title.value = '';
      link.value = '';
      return false;
    }
*/

makeCompactPost() {
  this.loading = true;
  this.http
    .post(
      'https://jsonplaceholder.typicode.com/posts',
      JSON.stringify({ body: 'ciao', title: 'gg',id: 1, userId: 43 })
    )
    .subscribe((data) => {
      this.data = data;
      this.loading = false;
    });
}







}
