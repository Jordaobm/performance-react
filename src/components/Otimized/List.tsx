import { List, ListRowRenderer } from "react-virtualized";
import { Item } from "../../types/Item";
import { ListItem } from "./Item";

interface ItemProps {
  itens: Item[];
  totalPrice: number;
}

interface ListPros {
  data: ItemProps;
  addToWishList: (id: number) => void;
}

export const ListOtimized = ({ data, addToWishList }: ListPros) => {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ListItem item={data?.itens[index]} addToWishList={addToWishList} />
      </div>
    );
  };

  return (
    <div>
      <h4>Total {data?.totalPrice}</h4>
      <div>
        <List
          height={300}
          rowHeight={30}
          width={900}
          overscanRowCount={5}
          rowCount={data?.itens?.length || 0}
          rowRenderer={rowRenderer}
        />
      </div>
    </div>
  );
};
