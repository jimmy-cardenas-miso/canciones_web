import * as faker from 'faker';
import { AbstractFactory } from './abstract.factory';
import {
  Album,
  Artist,
  Prizes
} from '@modules/artist/entities/artist.interface';

export class ArtistFactory extends AbstractFactory {
  public create(): Artist {
    return {
      id: faker.datatype.number({ min: 1, max: 1000 }).toString(),
      name: faker.lorem.word(),
      description: faker.lorem.paragraph(),
      image: faker.image.imageUrl(),
      albums: Array(4).fill(this.createAlbum),
      performerPrizes: null
    };
  }

  public createAlbum(): Album {
    return {
      id: faker.datatype.number({ min: 1, max: 1000 }).toString(),
      description: faker.lorem.paragraph(),
      name: faker.lorem.word(),
      cover: faker.lorem.word(),
      genre: faker.lorem.word(),
      recordLabel: faker.lorem.word(),
      releaseDate: faker.date.past()
    };
  }

  public createPrize(): Prizes {
    return {
      id: faker.datatype.number({ min: 1, max: 1000 }).toString(),
      premiationDate: faker.date.past()
    };
  }
}
