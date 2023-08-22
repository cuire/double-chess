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

export const Piece: React.FC<PieceProps> = ({ position, type, color }) => {
  return (
    <div
      className={`piece ${type}-${color}`}
      style={{
        transform: `
        translateX(${position.x * 100}%) 
        translateY(${position.y * 100}%)`,
        backgroundColor: "#5A9367",
      }}
    />
  );
};
