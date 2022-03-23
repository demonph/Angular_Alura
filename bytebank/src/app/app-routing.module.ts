import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtractComponent } from './extract/extract.component';
import { NewTransferComponent } from './new-transfer/new-transfer.component';

export const routes: Routes = [
  { path: '', redirectTo: 'extrato', pathMatch: 'full' },
  { path: 'extrato', component: ExtractComponent },
  { path: 'new-transfer', component: NewTransferComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
