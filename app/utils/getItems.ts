import path from 'path';
import fs from 'fs';
import { cache } from 'react';
import type { ItemType } from '@/app/types/item';

const FIXTURE_PATH = path.resolve(__dirname, '../..', '_fixtures');
const readFile = async (fileName: string) =>
  new Promise<ItemType>((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) throw reject(err);
      resolve(JSON.parse(data));
    });
  });

const readItems = () =>
  new Promise<Array<ItemType>>((resolveAll, rejectAll) => {
    console.debug('-path--->', FIXTURE_PATH);
    fs.readdir(FIXTURE_PATH, (err, files) => {
      Promise.all(files.map(file => readFile(path.resolve(FIXTURE_PATH, file))))
        .then(resolveAll)
        .catch(rejectAll);
    });
  });

const readItem = (id: string) =>
  readFile(path.resolve(FIXTURE_PATH, `item-${id}.json`));

export const getItems = cache(async () => await readItems());

export const getItem = cache(async (id: string) => await readItem(id));
