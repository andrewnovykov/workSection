import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'app works!';
  size = 0;
  show: string = 'none';

  workBelt(): any {
    this.size = -100;
    this.show = 'block';
  }

  returnWorkBelt(){
    this.size = 0;
    this.show = 'none';
  }





}
