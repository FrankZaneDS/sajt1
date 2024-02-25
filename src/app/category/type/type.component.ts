import { Component, Input } from '@angular/core';
import { typeCategory } from '../../data.service';

@Component({
  selector: 'app-type',
  standalone: true,
  imports: [],
  templateUrl: './type.component.html',
  styleUrl: './type.component.css',
})
export class TypeComponent {
  @Input() category: typeCategory;
}
