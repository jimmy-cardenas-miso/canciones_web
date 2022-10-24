export interface Comment {
  id: number;
  description: string;
  rating: number;
}

export interface FavoritePerformer {
  id: number;
  name: string;
  image: string;
  description: string;
  birthDate: Date;
  creationDate?: Date;
}

export interface CollectorAlbum {
  id: number;
  price: number;
  status: string;
}

export interface Collector {
  id: number;
  name: string;
  telephone: string;
  email: string;
  comments: Comment[];
  favoritePerformers: FavoritePerformer[];
  collectorAlbums: CollectorAlbum[];
}

export interface ArtistToCollectorFavorites {
  collectorId: string;
  musicianId: string;
}

export interface AlbumToCollectorFavorites {
  collectorId: string;
  albumId: string;
}

export interface RemoveAlbumToCollectorFavorites {
  collectorId: string;
  albumId: string;
}
