import { Component, OnInit } from '@angular/core';
import { Artist } from '../entities/artist.interface';
import { ArtistService } from '../service/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  public musicians: Artist[];
  public bands: Artist[];
  public starts: Artist[];
  public prices: Artist[];
  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {
    this.fetchArtist();
    this.fetchBand();
  }

  private fetchArtist(): void {
    this.artistService
      .fetchArtists()
      .subscribe((musicians: Artist[]) => (this.musicians = musicians));
  }

  private fetchBand(): void {
    this.artistService
      .fetchBands()
      .subscribe((bands: Artist[]) => (this.bands = bands));
  }

  private getPrice(): void {
    
  }
}
