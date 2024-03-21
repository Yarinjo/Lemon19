import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { SupportComponent } from './support/support.component';


const routes: Routes = [
  {path: 'contacts', component: ContactsComponent },
  {path: 'support', component: SupportComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
