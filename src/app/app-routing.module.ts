import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APIComponent } from './api/api.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [{ path:'main', component:MainComponent },
                        { path:'api', component:APIComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
