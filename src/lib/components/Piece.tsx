export type PieceType =
  | "pawn"
  | "rook"
  | "knight"
  | "bishop"
  | "queen"
  | "king";

export type PieceProps = {
  type: PieceType;
  color: "white" | "black";
  position: { x: number; y: number };
};

export const Piece: React.FC<PieceProps> = ({
  position: { x, y },
  type,
  color,
}) => {
  const pieceType = `${type}-${color}`;
  const piecePosition = `cell-${x}-${y}`;

  return (
    <div
      className={`piece ${piecePosition} ${pieceType}`}
      style={{
        backgroundColor: "#5A9367",
      }}
    />
  );
};
