import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Hobby } from '../models/hobby.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hobby-detail',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './hobby-detail.component.html',
  styleUrl: './hobby-detail.component.css'
})
export class HobbyDetailComponent implements OnInit{

  group: Hobby|undefined
  hobby: Hobby | undefined;
 

  constructor (private http: HttpClient, private activatedRoute: ActivatedRoute){}
  
  ngOnInit(): void {
   console.log('HobbyDetailComponenet');

   this.activatedRoute.params.subscribe(params=> {
    this.http.get<Hobby>("https://test-sm.onrender.com/hobbies/" + params['id']).subscribe(g=>{
      this.hobby=g;
      console.log(this.hobby);
    })
   })
  }


}
 {

}
