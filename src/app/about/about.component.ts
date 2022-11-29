import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  @Input() see: string='';

  constructor(){}
  
  ngOnInit(): void {
    
  }
  
  @Output() notify:EventEmitter<string> = new EventEmitter<string>();
  
  onClick():void{
    this.notify.emit("Arm");
  }
}
