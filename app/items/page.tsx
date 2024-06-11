import { getItems } from '@/app/utils/getItems';

export default async function Items() {
  const items = await getItems();
  console.debug('[Items page] data ->', items[0]);
  return (
    <div className="container flex  flex-col justify-between p-2">
      <h1 className="h-1 text-2xl">Items list here </h1>
    </div>
  );
}
