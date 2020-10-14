import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { RformsComponent } from './rforms/rforms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import {MatListModule} from '@angular/material/list';
import { Routes, RouterModule } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SearchPipe } from './search.pipe';
const routes: Routes = [
  {
    path:'register',component:RformsComponent
  },
  {
    path:'view',component:ViewstudentComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,RformsComponent, ViewstudentComponent, SearchPipe
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,RouterModule.forRoot(routes),
    MatDividerModule,MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
