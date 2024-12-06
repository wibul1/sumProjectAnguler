import { Component ,Output , EventEmitter} from '@angular/core';
import { PhotoService } from 'src/app/service/photh/photo.service';
@Component({
  selector: 'app-addphoto',
  templateUrl: './addphoto.component.html',
  styleUrls: ['./addphoto.component.css']
})
export class AddphotoComponent {
  @Output() photoAdded = new EventEmitter<void>();

  newPhoto = {image: ''};

  constructor(private photoService: PhotoService) {}

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newPhoto.image = reader.result as string; // เก็บ Base64 ของรูปภาพ
      };
      reader.readAsDataURL(file);
    }
  }

  createBook(): void {
    this.photoService.createPhoto(this.newPhoto).subscribe((data) => {
      this.newPhoto = { image: '' }; // รีเซ็ตฟอร์ม
      this.photoAdded.emit(); // ส่งอีเวนต์เพื่อบอกว่าหนังสือถูกเพิ่มแล้ว
    });
  }
}
