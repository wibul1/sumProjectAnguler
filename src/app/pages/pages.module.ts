import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ComponentModule } from '../component/component.module';
import { PhotoComponent } from './photo/photo.component';
import { TaskComponent } from './task/task.component';





@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    PhotoComponent,
    TaskComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ComponentModule
    
  ]
})
export class PagesModule { }
