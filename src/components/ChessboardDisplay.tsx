import React from 'react';
import ChessPiece from '@/components/ChessPiece';

interface ChessboardDisplayProps {
  simplified?: boolean;
  className?: string;
}

const ChessboardDisplay: React.FC<ChessboardDisplayProps> = ({
  simplified = true,
  className = '',
}) => {
  // Создаем упрощенную версию доски для декоративных целей
  if (simplified) {
    return (
      <div className={`grid grid-cols-4 grid-rows-4 w-full max-w-[240px] aspect-square rounded-md overflow-hidden shadow-md ${className}`}>
        {Array(16).fill(0).map((_, index) => {
          const row = Math.floor(index / 4);
          const col = index % 4;
          const isBlack = (row + col) % 2 === 1;
          
          return (
            <div 
              key={`cell-${row}-${col}`}
              className={`flex items-center justify-center w-full h-full ${isBlack ? 'bg-chess-board-dark' : 'bg-chess-board-light'}`}
            >
              {index === 2 && <ChessPiece type="knight" color="white" size="sm" />}
              {index === 5 && <ChessPiece type="pawn" color="black" size="sm" />}
              {index === 10 && <ChessPiece type="queen" color="white" size="sm" />}
              {index === 13 && <ChessPiece type="rook" color="black" size="sm" />}
            </div>
          );
        })}
      </div>
    );
  }

  // Полная шахматная доска с обозначениями рядов и колонок
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];

  return (
    <div className={`relative ${className}`}>
      <div className="grid grid-cols-8 grid-rows-8 w-full max-w-md aspect-square rounded-md overflow-hidden shadow-lg">
        {ranks.map((rank, rankIndex) => (
          files.map((file, fileIndex) => {
            const isBlack = (rankIndex + fileIndex) % 2 === 1;
            return (
              <div 
                key={`${file}${rank}`}
                className={`flex items-center justify-center w-full h-full ${isBlack ? 'bg-chess-board-dark' : 'bg-chess-board-light'}`}
              >
                {rankIndex === 1 && <ChessPiece type="pawn" color="black" size="sm" />}
                {rankIndex === 6 && <ChessPiece type="pawn" color="white" size="sm" />}
                {rankIndex === 0 && fileIndex === 0 && <ChessPiece type="rook" color="black" size="sm" />}
                {rankIndex === 0 && fileIndex === 1 && <ChessPiece type="knight" color="black" size="sm" />}
                {rankIndex === 0 && fileIndex === 2 && <ChessPiece type="bishop" color="black" size="sm" />}
                {rankIndex === 0 && fileIndex === 3 && <ChessPiece type="queen" color="black" size="sm" />}
                {rankIndex === 0 && fileIndex === 4 && <ChessPiece type="king" color="black" size="sm" />}
                {rankIndex === 0 && fileIndex === 5 && <ChessPiece type="bishop" color="black" size="sm" />}
                {rankIndex === 0 && fileIndex === 6 && <ChessPiece type="knight" color="black" size="sm" />}
                {rankIndex === 0 && fileIndex === 7 && <ChessPiece type="rook" color="black" size="sm" />}
                {rankIndex === 7 && fileIndex === 0 && <ChessPiece type="rook" color="white" size="sm" />}
                {rankIndex === 7 && fileIndex === 1 && <ChessPiece type="knight" color="white" size="sm" />}
                {rankIndex === 7 && fileIndex === 2 && <ChessPiece type="bishop" color="white" size="sm" />}
                {rankIndex === 7 && fileIndex === 3 && <ChessPiece type="queen" color="white" size="sm" />}
                {rankIndex === 7 && fileIndex === 4 && <ChessPiece type="king" color="white" size="sm" />}
                {rankIndex === 7 && fileIndex === 5 && <ChessPiece type="bishop" color="white" size="sm" />}
                {rankIndex === 7 && fileIndex === 6 && <ChessPiece type="knight" color="white" size="sm" />}
                {rankIndex === 7 && fileIndex === 7 && <ChessPiece type="rook" color="white" size="sm" />}
              </div>
            );
          })
        ))}
      </div>
    </div>
  );
};

export default ChessboardDisplay;
