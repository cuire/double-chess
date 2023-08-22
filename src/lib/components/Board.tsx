type BoardProps = {
  className?: string;
  children?: React.ReactNode;
};

export const Board: React.FC<BoardProps> = ({ children, className }) => {
  return (
    <div
      className={`relative w-full aspect-board bg-board 
      border-orange-300 border-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default Board;
