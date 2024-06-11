'use server';
import path from 'path';
import fs from 'fs';
import { faker } from '@faker-js/faker';

const FIXTURE_PATH = path.resolve(__dirname, '_fixtures');
const COUNT_OF_ITEMS = 100;

const createFixture = () =>
  new Promise((resolve, reject) => {
    const fixture = {
      _id: faker.string.uuid(),
      title: faker.lorem.sentence(5),
      description: faker.lorem.paragraph({ min: 1, max: 3 }),
      image: {
        originUrl: 'https://dummyimage.com/640x240&text=origin!',
        thumbnailUrl: 'https://dummyimage.com/4096x2160&text=thumbnai!',
      },
      createdAt: faker.date.birthdate(),
      createdBy: {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        avatar: {
          originUrl: 'https://dummyimage.com/640x240&text=avater_origin!',
          thumbnailUrl:
            'https://dummyimage.com/4096x2160&text=_avatar_thumbnai!',
        },
        email: {
          address: faker.internet.email(),
          verified: true,
        },
      },
    };
    const file_name = `item-${fixture._id}.json`;
    fs.writeFile(
      path.resolve(FIXTURE_PATH, file_name),
      JSON.stringify(fixture),
      'utf8',
      err => {
        if (err) {
          reject(err);
        } else {
          console.log(`[onAppStart] -> ${file_name} is created`);
          resolve(fixture);
        }
      }
    );
  });
const createFixtures = async () => {
  try {
    if (!fs.existsSync(FIXTURE_PATH)) {
      console.log('[onAppStart] -> create folder: ', FIXTURE_PATH);
      fs.mkdirSync(FIXTURE_PATH);
      console.log('[onAppStart] -> start adding fixtures');
      await Promise.all(
        Array.from({ length: COUNT_OF_ITEMS }).map(createFixture)
      );
    }
    console.log('[onAppStart] -> fixtures is already added');
  } catch (err) {
    console.error('[onAppStart] error ->');
    console.error(err);
  }
};

export async function onAppStart() {
  await createFixtures();
}
