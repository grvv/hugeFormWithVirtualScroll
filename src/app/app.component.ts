import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'virtualScroll';
  largeDataSet = [];
  ready = false;
  constructor(
    private http: HttpClient
  ){

  }

  ngOnInit(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (res: Array<any>) => {
        let dataSet = res;
        for(let i = 0; i < 1000; i++){
          this.largeDataSet = [...this.largeDataSet, ...dataSet];
        }
        console.log(this.largeDataSet);
        this.ready = true;
      }
    )
  }

}
