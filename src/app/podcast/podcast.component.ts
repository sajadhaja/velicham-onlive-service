import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PodcastComponent implements OnInit {

  podcasts: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/podcast').subscribe(data => {
      console.log(data);
      this.podcasts = data;
    });
  }

}
