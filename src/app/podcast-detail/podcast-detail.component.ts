import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-podcast-detail',
  templateUrl: './podcast-detail.component.html',
  styleUrls: ['./podcast-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PodcastDetailComponent implements OnInit {

  podcast = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getPodcastDetail(this.route.snapshot.params['id']);
  }

  getPodcastDetail(id) {
    this.http.get('/podcast/'+id).subscribe(data => {
      this.podcast = data;
    });
  }

  deletePodcast(id) {
    this.http.delete('/podcast/'+id)
      .subscribe(res => {
          this.router.navigate(['/podcasts']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
