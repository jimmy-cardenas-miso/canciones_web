export interface Album {
  id: number;
  name: string;
  cover: string;
  releaseDate: string;
  description: string;
  genre: string;
  recordLabel: string;
  tracks: Array<T>;
  performers: Array<P>;
  comments: Array<Comments>;
}

interface T {
  id: number;
  name: string;
  duration: string;
}

interface P {
  id: number;
  name: string;
  image: string;
  description: string;
  birthDate: string;
}

export interface Comments {
  id?: number;
  description: string;
  rating: number;
}
export interface Track {
  name: string;
  duration: string;
}
