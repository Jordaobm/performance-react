import Link from "next/link";
import { FormEvent, useState } from "react";
import { Form } from "../components/NotOtimized/Form";
import { List } from "../components/NotOtimized/List";
import { Item } from "../types/Item";

function NotOtimized() {
  const [searchText, setSearchText] = useState("camiseta 1");

  const [items, setItems] = useState<Item[]>([]);

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

    setItems(resultsFormatted);
  };

  const test = () => {
    // apaga 3 digitos do texto digitado
    setSearchText("camiset");
  };

  const rest = () => {
    // reseta o texto para o texto original
    setSearchText("camiseta 1");
  };

  const addToWishList = (id: number) => {
    console.log(id);
  };

  return (
    <div className="container">
      <Link href="/">Voltar à home</Link>

      <h1>❌ Não Otimizado</h1>

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
        <List items={items} addToWishList={addToWishList} />
      </div>
    </div>
  );
}

export default NotOtimized;
