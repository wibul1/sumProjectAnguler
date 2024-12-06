import { Component ,OnInit } from '@angular/core';
import { PhotoService } from 'src/app/service/photh/photo.service';

@Component({
  selector: 'app-showphoto',
  templateUrl: './showphoto.component.html',
  styleUrls: ['./showphoto.component.css']
})
export class ShowphotoComponent {
  photo: any[] = [];

   constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.getPhoto();
  }

  getPhoto(): void {
    this.photoService.getAllPhotos().subscribe((data) => {
      this.photo = data;
    });
  }
}
