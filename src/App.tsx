import { Board } from "$lib/components/Board";
import { Piece } from "$lib/components/Piece";

export default function App() {
  return (
    <Board>
      <Piece
        type={"king"}
        color={"black"}
        position={{
          x: 0,
          y: 3,
        }}
      />
    </Board>
  );
}
