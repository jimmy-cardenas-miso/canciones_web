import * as faker from 'faker';
import { AbstractFactory } from './abstract.factory';
import {
  Collector,
  CollectorAlbum,
  Comment,
  FavoritePerformer
} from '@modules/collectors/entities/colllector.interface';

export class CollectorFactory extends AbstractFactory {
  public create(): Collector {
    return {
      id: faker.datatype.number({ min: 1, max: 1000 }).toString(),
      name: faker.lorem.word(),
      telephone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      comments: Array(4).fill(this.createComment()),
      favoritePerformers: Array(4).fill(this.createFavoritePerformer()),
      collectorAlbums: Array(4).fill(this.createCollectorAlbum())
    };
  }

  public createFavoritePerformer(): FavoritePerformer {
    return {
      id: faker.datatype.number({ min: 1, max: 1000 }).toString(),
      name: faker.lorem.word(),
      image: faker.image.imageUrl(),
      description: faker.lorem.paragraph(),
      birthDate: faker.date.past(),
      creationDate: faker.date.past()
    };
  }

  public createCollectorAlbum(): CollectorAlbum {
    return {
      id: faker.datatype.number({ min: 1, max: 1000 }).toString(),
      price: faker.finance.amount(),
      status: faker.lorem.word()
    };
  }

  public createComment(): Comment {
    return {
      id: faker.datatype.number({ min: 1, max: 1000 }).toString(),
      description: faker.lorem.paragraph(),
      rating: faker.datatype.number({ min: 1, max: 5 })
    };
  }
}
