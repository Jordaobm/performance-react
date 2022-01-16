import { FormEvent } from "react";

interface FormProps {
  setSearchText: (value: string) => void;
  searchText: string;
  handleSubmit: (event: FormEvent) => void;
}

export const Form = ({
  searchText,
  setSearchText,
  handleSubmit,
}: FormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(value) => setSearchText(value?.target?.value)}
        value={searchText}
        id="inputSearch"
      />

      <button type="submit" id="submitButton">
        Buscar
      </button>
    </form>
  );
};
