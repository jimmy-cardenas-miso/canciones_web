import * as faker from 'faker';
import { AbstractFactory } from './abstract.factory';
import { Album } from '@app/modules/album/album.interface';

export class AlbumFactory extends AbstractFactory {
  public create(): Album {
    return {
      id: faker.datatype.number({ min: 1, max: 1000 }).toString(),
      name: faker.lorem.word(),
      cover: faker.lorem.word(),
      releaseDate: faker.date.past(),
      description: faker.date.past(),
      genre: faker.lorem.word(),
      recordLabel: faker.lorem.word(),
      tracks: [],
      performers: [],
      comments: []
    };
  }
}
