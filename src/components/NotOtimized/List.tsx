import { Item } from "../../types/Item";
import { ListItem } from "./Item";

interface ListPros {
  items: Item[];
  addToWishList: (id: number) => void;
}

export const List = ({ items, addToWishList }: ListPros) => {
  const totalPrice = items?.reduce((acc, item) => acc + item?.price, 0);

  return (
    <div>
      <h4>Total {totalPrice}</h4>
      <div>
        {items?.map((item) => (
          <ListItem key={item?.id} item={item} addToWishList={addToWishList} />
        ))}
      </div>
    </div>
  );
};
