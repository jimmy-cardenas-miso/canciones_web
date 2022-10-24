import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../entities/artist.interface';
import { ArtistService } from '../service/artist.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {
  public artist: Artist;
  public isBand: boolean = false;
  constructor(private service: ArtistService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.length > 1) {
      this.isBand = true;
      this.service
        .getBandById(this.route.snapshot.params.id)
        .subscribe((artist: Artist) => (this.artist = artist));
    } else {
      this.service
        .getArtistById(this.route.snapshot.params.id)
        .subscribe((artist: Artist) => (this.artist = artist));
    }
  }
}
