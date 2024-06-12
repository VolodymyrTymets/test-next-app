import path from 'path';
import fs from 'fs';
import { cache } from 'react';
import type { ItemType } from '@/app/types/item';

const FIXTURE_PATH = path.resolve(process.cwd(), '__fixtures__');
const readFile = async (fileName: string) =>
  new Promise<ItemType>((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) throw reject(err);
      resolve(JSON.parse(data));
    });
  });

const readItems = () =>
  new Promise<Array<ItemType>>((resolveAll, rejectAll) => {
    fs.readdir(FIXTURE_PATH, (err, files) => {
      Promise.all(files.map(file => readFile(path.resolve(FIXTURE_PATH, file))))
        .then(resolveAll)
        .catch(rejectAll);
    });
  });

const readItem = (id: string) =>
  readFile(path.resolve(FIXTURE_PATH, `item-${id}.json`));

export const getItems = cache(async (skip = 0, limit = 10) => {
  const items = await readItems();
  return {
    items: items.slice(skip, limit),
    totalCount: items.length,
  };
});

export const getItem = cache(async (id: string) => await readItem(id));
