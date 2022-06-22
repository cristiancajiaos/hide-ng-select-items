import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  selectedOption: any;

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
    this.selectedOption = this.options[0].id;
  }
}
