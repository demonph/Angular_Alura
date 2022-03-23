import { BankServiceService } from './../service/bankService.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent implements OnInit {
  @Output() allTrnasferir = new EventEmitter<any>();

  public valueTransfer: number = 0;
  public destiny: number = 0;

  ngOnInit(): void {}

  transferValue() {
    const valEmitter = {
      valueTransfer: this.valueTransfer,
      destiny: this.destiny,
    };
    this.allTrnasferir.emit(valEmitter);
  }
}
