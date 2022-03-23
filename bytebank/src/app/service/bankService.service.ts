import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transfer } from '../model/transfer';

@Injectable({
  providedIn: 'root',
})
export class BankServiceService {
  private transfer: Transfer[];
  private url = 'http://localhost:3000/transferencia';
  constructor(private httpClient: HttpClient) {
    this.transfer = [];
  }

  getTransfer() {
    return this.transfer;
  }
  setTransfer(transfer: Transfer) {
    return this.transfer;
  }
  totalList(): Observable<Transfer[]> {
    return this.httpClient.get<Transfer[]>(this.url);
  }

  trasnfer(transfer: Transfer): Observable<Transfer> {
    this.ajustDate(transfer);
    const transferencia = { ...transfer, data: new Date() };
    return this.httpClient.post<Transfer>(this.url, transferencia);
  }
  ajustDate(transfer: any) {
    transfer.data = new Date();
  }
}
