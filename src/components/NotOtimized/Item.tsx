import { useState } from "react";
import { Item } from "../../types/Item";
import { Span } from "./Span";

export interface ListItemProps {
  item: Item;
  addToWishList: (id: number) => void;
}

export const ListItem = ({ item, addToWishList }: ListItemProps) => {
  const [showSpanAddToWishList, setShowSpanAddToWishList] = useState(false);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <p>{item?.title}</p>
      <p style={{ marginLeft: "20px" }}>
        <strong>{item?.priceFormatted}</strong>
      </p>
      <button onClick={() => setShowSpanAddToWishList(true)}>
        Adicionar aos favoritos?
      </button>
      {showSpanAddToWishList && (
        <Span
          onAddToWishList={() => addToWishList(item?.id)}
          onRequestClose={() => setShowSpanAddToWishList(false)}
        />
      )}
    </div>
  );
};
