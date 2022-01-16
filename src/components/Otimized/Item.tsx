import { memo, useState } from "react";
import { Item } from "../../types/Item";
// import { Span } from "./Span";

import dynamic from "next/dynamic";
import { SpanProps } from "./Span";

const Span = dynamic<SpanProps>(
  () => {
    return import("./Span").then((mod) => mod.Span);
  },
  {
    loading: () => <span>Carregando...</span>,
  }
);

export interface ListItemProps {
  item: Item;
  addToWishList: (id: number) => void;
}

const ListItemComponent = ({ item, addToWishList }: ListItemProps) => {
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

export const ListItem = memo(ListItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.item, nextProps.item); // Verificando se o objeto do item anterior é igual ao objeto do item atual
});
