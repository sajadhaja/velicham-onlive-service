import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-podcast-create',
  templateUrl: './podcast-create.component.html',
  styleUrls: ['./podcast-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PodcastCreateComponent implements OnInit {

  podcast = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  savePodcast() {
    this.http.post('/podcast', this.podcast)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/podcasts']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
