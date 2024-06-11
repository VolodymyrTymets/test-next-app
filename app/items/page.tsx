import { getItems } from '@/app/utils/getItems';
import ItemsList from '@/app/items/components/ItemsList/ItemsList';

export default async function Items() {
  const items = await getItems();
  return (
    <div className="flex flex-col p-4">
      <div className="flex">
        <h1 className="w-full text-2xl">Items list here </h1>
      </div>
      <div className="flex">
        <ItemsList items={items} />
      </div>
    </div>
  );
}
