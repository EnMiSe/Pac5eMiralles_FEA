import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {
  images: Image[] = [];
  displayedColumns: string[] = ['id', 'author', 'actions'];
  loading = true;
  isGridView = true;

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.imagesService.getAllImages().subscribe((data) => {
      this.images = data;
      this.loading = false;
    });
  }

  toggleView(): void {
    this.isGridView = !this.isGridView;
  }
}




