interface SpanProps {
  onAddToWishList: () => void;
  onRequestClose: () => void;
}

export const Span = ({ onAddToWishList, onRequestClose }: SpanProps) => {
  return (
    <div>
      <span>Deseja adicionar aos favoritos?</span>
      <button onClick={onAddToWishList}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </div>
  );
};
