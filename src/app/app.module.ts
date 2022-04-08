import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormComponent } from './components/Form/reactive-form/reactive-form.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserProfileComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:UserListComponent},
      {path:'user-profile',component:UserProfileComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
