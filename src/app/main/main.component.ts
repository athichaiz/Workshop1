import { Component} from '@angular/core';
import { APIComponent } from '../api/api.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  wel:string = 'Welcome!';
  secrets: any[] = [{ secret: "Bang!" }];
  showmsg: string='';
  movie:any=Array;
  mid:string='';
  constructor(){

  }

  onNotifyClick(msg:string):void{
    this.showmsg=msg;
  }
  onNotifyClick1(mv:string):void{
    this.movie=mv;
  }
}
