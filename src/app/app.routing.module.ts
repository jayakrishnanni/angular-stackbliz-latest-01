import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './views/login/login.component';
import { ErrorComponent } from './views/error/error.component';

@NgModule({
  declarations: [LoginComponent, ErrorComponent],
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: '**', component: ErrorComponent},
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
