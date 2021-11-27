import type { _File, Rank } from "Piece";

export default class Position {
  constructor(private file: _File, private rank: Rank) {}
  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
    };
  }
}
