import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(features: string) {
    // console.log(features);
    this.featureSelected.emit(features);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
