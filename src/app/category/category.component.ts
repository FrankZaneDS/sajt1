import { Component } from '@angular/core';
import { TypeComponent } from './type/type.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, typeCategory } from '../data.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [TypeComponent, CommonModule, FormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  categories: typeCategory[] = this.dataService.popularCategories;
  constructor(private dataService: DataService) {}
}
