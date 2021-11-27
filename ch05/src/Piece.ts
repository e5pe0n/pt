import Position from "Position";

export type Color = "Black" | "White";
export type _File = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

abstract class Piece {
  protected position: Position;
  constructor(private readonly color: Color, file: _File, rank: Rank) {
    this.position = new Position(file, rank);
  }
  moveTo(position: Position) {
    this.position = position;
  }
  abstract canMoveTo(position: Position): boolean;
}

export class King extends Piece {
  canMoveTo(position: Position): boolean {
    const distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}
export class Queen extends Piece {}
export class Bishop extends Piece {}
export class Knight extends Piece {}
export class Rook extends Piece {}
export class Pawn extends Piece {}
