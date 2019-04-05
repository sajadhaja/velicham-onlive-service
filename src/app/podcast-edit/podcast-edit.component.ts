import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-podcast-edit',
  templateUrl: './podcast-edit.component.html',
  styleUrls: ['./podcast-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PodcastEditComponent implements OnInit {

  podcast: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPodcast(this.route.snapshot.params['id']);
  }

  getPodcast(id) {
    this.http.get('/podcast/'+id).subscribe(data => {
      this.podcast = data;
    });
  }

  updatePodcast(id) {
    this.podcast.updated_date = Date.now();
    this.http.put('/podcast/'+id, this.podcast)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/podcast-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
