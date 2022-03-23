import { Router, Routes } from '@angular/router';
import { BankServiceService } from './../service/bankService.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transfer } from '../model/transfer';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent implements OnInit {
  public valueTransfer: number = 0;
  public destiny: number = 0;
  constructor(private service: BankServiceService,private router:Router) {}
  ngOnInit(): void {}

  transferValue() {
    const valEmitter: Transfer = {
      valueTransfer: this.valueTransfer,
      destiny: this.destiny.toString(),
    };
    this.service.trasnfer(valEmitter).subscribe(
      (result) => {
        if(result){
          this.router.navigateByUrl('extrato')
        }
      },
      (error) => console.error(error)
    );
  }
  limparCampos() {
    this.valueTransfer = 0;
    this.destiny = 0;
  }
}
