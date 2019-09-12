import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider-master',
  templateUrl: './slider-master.component.html',
  styleUrls: ['./slider-master.component.css']
})
export class SliderMasterComponent implements OnInit {

  constructor() { }

  images = [0, 1, 2].map(() => `https://picsum.photos/1440/500?random&t=${Math.random()}`);

  ngOnInit() {}

}
