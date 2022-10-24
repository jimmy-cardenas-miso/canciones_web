export interface Artist {
  id: number;
  name: string;
  image: string;
  description: string;
  albums: Album[];
  musicians?: M[];
  performerPrizes: Prizes[];
}
export interface Album {
  id: number;
  name: string;
  cover: string;
  releaseDate: Date;
  description: string;
  genre: string;
  recordLabel: string;
}

export interface Prizes {
  id: number;
  premiationDate: Date;
}

interface M {
  name: string;
  image: string;
  birthDate: Date;
}
