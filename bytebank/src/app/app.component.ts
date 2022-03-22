import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  value: number = 0;
  destiny: number = 0;
  constructor() {}

  ngOnInit(): void {}

  trasnfer($event: any) {
    this.destiny = $event.destiny;
    this.value = $event.valueTransfer;
  }
}
