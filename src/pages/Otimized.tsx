import Link from "next/link";
import { FormEvent, useCallback, useState } from "react";
import { Form } from "../components/Otimized/Form";
import { ListOtimized } from "../components/Otimized/List";
import { Item } from "../types/Item";

interface ItemProps {
  itens: Item[];
  totalPrice: number;
}

function Otimized() {
  const [searchText, setSearchText] = useState("camiseta 1");

  const [items, setItems] = useState<ItemProps>({} as ItemProps);

  const handleSubmit = async (event: FormEvent) => {
    event?.preventDefault();

    const response = await fetch(
      `http://localhost:3333/products?q=${searchText}`
    );

    const results: Item[] = await response.json();

    const resultsFormatted: Item[] = results?.map((item) => ({
      ...item,
      priceFormatted: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(item?.price),
    }));

    const totalPrice = results?.reduce(
      (acc: number, item: Item) => acc + item?.price,
      0
    );

    setItems({
      itens: resultsFormatted,
      totalPrice,
    });
  };

  const test = () => {
    // apaga 3 digitos do texto digitado
    setSearchText("camiset");
  };

  const rest = () => {
    // reseta o texto para o texto original
    setSearchText("camiseta 1");
  };

  const addToWishList = useCallback((id: number) => {
    console.log(id);
  }, []);

  return (
    <div className="container">
      <Link href="/">Voltar à home</Link>

      <h1>✔️ Otimizado</h1>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Form
          searchText={searchText}
          setSearchText={setSearchText}
          handleSubmit={handleSubmit}
        />

        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={rest}>Voltar ao estado anterior!</button>
          <button onClick={test}>Testar!</button>
        </div>
      </div>

      <div>
        <ListOtimized data={items} addToWishList={addToWishList} />
      </div>
    </div>
  );
}

export default Otimized;
