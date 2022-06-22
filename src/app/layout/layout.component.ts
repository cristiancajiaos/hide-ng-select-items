import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  selectedCategory: any;
  selectedOption: any;

  categories = [
    { id: 1, name: 'Category 1', description: 'Category 1 Description' },
    { id: 2, name: 'Category 2', description: 'Category 2 Description' },
    { id: 3, name: 'Category 3', description: 'Category 3 Description' },
  ];

  options = [
    { id: 0, name: 'Foo', category: 1, description: 'Foo description' },
    { id: 1, name: 'Bar', category: 1, description: 'Bar description' },
    { id: 2, name: 'Baz', category: 2, description: 'Baz description' },
    { id: 3, name: 'Alpha', category: 3, description: 'Alpha description' },
    { id: 4, name: 'Beta', category: 3, description: 'Beta description' },
    { id: 5, name: 'Gamma', category: 3, description: 'Gamma description' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.selectedCategory = this.categories[0].id;
    this.selectedOption = this.options[0].id;
  }

  public onChangeCategory(event: Event): void {
    this.selectedOption = this.options.filter(option => option.category == this.selectedCategory)[0].id;
  }

  public onChangeOption(event: Event): void {
    console.log(event);
  }
}
