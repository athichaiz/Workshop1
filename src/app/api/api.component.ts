import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { APIsService } from '../apis.service';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})

export class APIComponent {
movies:any=Array;
  mid:string='';
constructor(private service : APIsService){}
@Input() mvid: string='';

@Output() getMovie:EventEmitter<string> = new EventEmitter<string>();
onClick(){
  this.service.getmovie(this.mvid).subscribe(res=>{
  
    console.log(res)
    this.movies = res;
    this.getMovie.emit(this.movies);
    

  })
return this.movies;
}
}

