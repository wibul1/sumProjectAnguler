import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { PhotoService } from './photh/photo.service';
@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
        AuthService,
        PhotoService,
    ]
    
  })

  export class ServiceModule { }