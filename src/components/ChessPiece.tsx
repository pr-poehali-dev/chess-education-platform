import React from 'react';

type PieceType = 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
type PieceColor = 'white' | 'black';

interface ChessPieceProps {
  type: PieceType;
  color: PieceColor;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const ChessPiece: React.FC<ChessPieceProps> = ({ 
  type, 
  color, 
  size = 'md',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl'
  };

  const getPieceSymbol = (): string => {
    if (color === 'white') {
      switch (type) {
        case 'pawn': return '♙';
        case 'rook': return '♖';
        case 'knight': return '♘';
        case 'bishop': return '♗';
        case 'queen': return '♕';
        case 'king': return '♔';
        default: return '';
      }
    } else {
      switch (type) {
        case 'pawn': return '♟';
        case 'rook': return '♜';
        case 'knight': return '♞';
        case 'bishop': return '♝';
        case 'queen': return '♛';
        case 'king': return '♚';
        default: return '';
      }
    }
  };

  return (
    <div className={`inline-block ${sizeClasses[size]} ${className} transition-transform hover:scale-110`}>
      {getPieceSymbol()}
    </div>
  );
};

export default ChessPiece;
