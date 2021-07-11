export type MoverType = 'X' | 'O';

export enum EndGameResult {
  Game,
  None,

  Horizontal_0,
  Horizontal_1,
  Horizontal_2,

  Vertical_0,
  Vertical_1,
  Vertical_2,

  LeftDiagonal,
  RightDiagonal
}

export interface Position {
  x: number;
  y: number;
}

export interface TreeItem {
  layer: number;
  result: -1 | 0 | 1;
  move: {
    currentMover: MoverType;
  } & Position;
  child: CalculateMoveResult | null;
}

export type ResultTreeItem = TreeItem | undefined;

export type CalculateMoveResult = ResultTreeItem[][];

export type TreeSearchResult = { result: -1 | 0 | 1; steps: number }[][];

export interface GameSettingsState {
  selectedUserMover: MoverType;
  currentMover: MoverType;
  score: { X: number; O: number };
  endGameResult: EndGameResult;
  currentStep: number;
}

export interface GameHistoryItem extends Position {
  mover: MoverType;
  message?: string;
  date?: Date;
}

export type GameField = (MoverType | null)[][];
