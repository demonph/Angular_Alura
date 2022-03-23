import { Component, Input, OnInit } from '@angular/core';
import { BankServiceService } from '../service/bankService.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
})
export class ExtractComponent implements OnInit {
  trasnferir: any[] = [];

  constructor(private service: BankServiceService) {}

  ngOnInit(): void {
    this.getTransfer();
  }

  getTransfer() {
    this.service.totalList().subscribe((resp) => {
      if (resp) {
        this.trasnferir = resp;
      }
    });
  }
}
