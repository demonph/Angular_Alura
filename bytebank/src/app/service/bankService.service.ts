import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BankServiceService {
  private transfer: any[];
  constructor(private httpClient: HttpClient) {
    this.transfer = [];
  }

  getTransfer() {
    return this.transfer;
  }
  setTransfer(transfer: any) {
    return this.transfer;
  }
  trasnfer(transfer: any) {
    this.ajustDate(transfer);
    const transferencia = { ...transfer, data: new Date() };
    this.transfer.push(transferencia);
  }
  ajustDate(transfer: any) {
    transfer.data = new Date();
  }
}
