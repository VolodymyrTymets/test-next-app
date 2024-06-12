import type { ItemType } from '@/app/types/item';
import ItemCard from '@/app/items/components/ItemCard/ItemCard';

export default async function Items({ items }: { items: Array<ItemType> }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {items.map(item => (
        <ItemCard item={item} key={item._id} />
      ))}
    </div>
  );
}
