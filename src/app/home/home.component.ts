import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { PathComponent } from '../path/path.component';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, PathComponent, CategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
