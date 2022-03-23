import { BankServiceService } from './service/bankService.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  constructor(private service: BankServiceService) {}

  ngOnInit(): void {}

  trasnfer($event: any) {
    this.service.trasnfer($event);
  }
}
