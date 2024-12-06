import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ComponentRoutingModule } from './component-routing.module';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AddphotoComponent } from './addphoto/addphoto.component';
import { ShowphotoComponent } from './showphoto/showphoto.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { TaskitemComponent } from './taskitem/taskitem.component';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    AddphotoComponent,
    ShowphotoComponent,
    AddtaskComponent,
    TaskitemComponent,
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    FormsModule
  ],
  exports:[
    SidebarComponent,
    NavbarComponent,
    AddphotoComponent,
    ShowphotoComponent,
    AddtaskComponent,
    TaskitemComponent,
  ]
})
export class ComponentModule { }
