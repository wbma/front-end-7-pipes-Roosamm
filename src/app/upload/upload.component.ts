import { Component, OnInit } from '@angular/core';
import {Media} from '../interfaces/media';
import {MediaService} from '../services/media.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  file: File;

  media: Media = {
    title: '',
    description: ''
  };

  constructor(public mediaService: MediaService) { }

  setFile(evt) {
    console.log(evt.target.files[0]);
    this.file = File = evt.target.files[0];
  }

  startUpload() {

    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('title', this.media.title);
    formData.append('description', this.media.description);
    console.log(formData);

    this.mediaService.upload(formData).subscribe(data => {
      console.log(data);
    }, (e: HttpErrorResponse) => {
      console.log(e);
  });
}

  ngOnInit() {
  }

}
