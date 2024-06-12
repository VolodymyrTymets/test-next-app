import { getItems } from '@/app/utils/getItems';
import ItemsList from '@/app/items/components/ItemsList/ItemsList';
import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';

export default async function Items() {
  const items = await getItems();
  return (
    <div className="flex flex-col p-4">
      <div className="flex">
        <Breadcrumbs items={[{ title: 'Items' }]} />
      </div>
      <div className="flex">
        <h1 className="w-full text-2xl">Items</h1>
      </div>
      <div className="flex mt-4">
        <ItemsList items={items} />
      </div>
    </div>
  );
}
