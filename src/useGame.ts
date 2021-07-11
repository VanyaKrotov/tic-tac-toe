import { useCallback, useEffect, useState } from 'react';
import {
  createResult,
  CROSS,
  GAME_FIELD_SIZE,
  getEmptyField,
  ZERO
} from './constants';
import {
  CalculateMoveResult,
  EndGameResult,
  GameField,
  GameHistoryItem,
  GameSettingsState,
  MoverType,
  Position,
  TreeSearchResult
} from './types';

const getEmptyCell = (gameField: GameField): Position | null => {
  for (let x = 0; x < GAME_FIELD_SIZE; x++) {
    for (let y = 0; y < GAME_FIELD_SIZE; y++) {
      if (!gameField[x][y]) {
        return { x, y };
      }
    }
  }

  return null;
};

const checkEndGame = (gameField: GameField) => {
  if (getEmptyCell(gameField) === null) {
    return EndGameResult.None;
  }

  for (let index = 0; index !== GAME_FIELD_SIZE; index++) {
    const compX = gameField[index][0];
    if (compX && gameField[index].every((x) => x === compX)) {
      return EndGameResult.Horizontal_0 + index;
    }

    const compY = gameField[0][index];
    if (compY && gameField.every((row) => row[index] === compY)) {
      return EndGameResult.Vertical_0 + index;
    }
  }

  const lComp = gameField[0][0];
  if (
    lComp &&
    gameField.every((_, index) => gameField[index][index] === lComp)
  ) {
    return EndGameResult.LeftDiagonal;
  }

  const rComp = gameField[GAME_FIELD_SIZE - 1][0];
  if (
    rComp &&
    gameField.every(
      (_, index) => gameField[GAME_FIELD_SIZE - 1 - index][index] === rComp
    )
  ) {
    return EndGameResult.RightDiagonal;
  }

  return EndGameResult.Game;
};

const createSnapshot = (arr: GameField): GameField =>
  JSON.parse(JSON.stringify(arr));

const calculateMove = (
  currentField: GameField,
  currentMover: MoverType,
  layer: number = 0
): CalculateMoveResult =>
  currentField.map((row, x) =>
    row.map((_, y) => {
      if (currentField[x][y]) {
        return undefined;
      }

      const newField = createSnapshot(currentField);

      newField[x][y] = currentMover;

      const end = checkEndGame(newField);
      const move = { x, y, currentMover };
      const newLayer = layer + 1;
      if (end !== EndGameResult.Game) {
        return {
          layer: newLayer,
          result: currentMover === ZERO ? 1 : -1,
          move,
          child: null
        };
      }

      return {
        layer: newLayer,
        result: 0,
        move,
        child: calculateMove(
          newField,
          currentMover === CROSS ? ZERO : CROSS,
          newLayer
        )
      };
    })
  );

const treeSearch = (
  tree: CalculateMoveResult,
  init = createResult()
): TreeSearchResult =>
  tree.reduce(
    (xAcc, row, x) =>
      row.reduce((yAcc, col, y) => {
        if (
          col?.result &&
          (yAcc[x][y].steps === 0 || yAcc[x][y].steps >= col.layer)
        ) {
          yAcc[x][y] = {
            result: col.result,
            steps: col.layer
          };
        }

        if (!col?.child) {
          return yAcc;
        }

        return treeSearch(col.child, yAcc);
      }, xAcc),
    init
  );

const getNextMove = (gameTree: CalculateMoveResult) => {
  const result = treeSearch(gameTree);

  return result.reduce(
    (xAcc, row, x) =>
      row.reduce(
        (yAcc, col, y) =>
          col.result && col.steps < yAcc.min
            ? { pos: { x, y }, min: col.steps }
            : yAcc,
        xAcc
      ),
    { pos: { x: 0, y: 0 }, min: 100 }
  ).pos;
};

const useGame = () => {
  const [gameField, changeField] = useState<GameField>(getEmptyField());
  const [settings, changeSettings] = useState<GameSettingsState>({
    currentMover: CROSS,
    score: { [CROSS]: 0, [ZERO]: 0 },
    selectedUserMover: CROSS,
    endGameResult: EndGameResult.Game,
    currentStep: 0
  });
  const [gameHistory, changeHistory] = useState<GameHistoryItem[]>([]);
  const { currentMover, selectedUserMover } = settings;

  const onMove = useCallback(
    (x, y) => {
      if (gameField[x][y]) {
        return;
      }

      const newField = [...gameField];

      newField[x][y] = currentMover;

      const gameResult = checkEndGame(newField);
      const historyItem = {
        mover: currentMover,
        x,
        y,
        message:
          gameResult !== EndGameResult.Game
            ? `Игра окончена ${
                gameResult === EndGameResult.None
                  ? 'ничьей'
                  : `победой - ${currentMover}`
              }!`
            : '',
        date: new Date()
      };

      changeHistory((current) => current.concat(historyItem));
      changeField(newField);
      changeSettings((prev) => {
        const newSettings = { ...prev };
        if (
          gameResult !== EndGameResult.Game &&
          EndGameResult.None !== gameResult
        ) {
          newSettings.score[currentMover]++;
        }

        newSettings.endGameResult = gameResult;
        newSettings.currentStep++;
        newSettings.currentMover = currentMover === CROSS ? ZERO : CROSS;

        return newSettings;
      });
    },
    [gameField, changeField, currentMover, changeSettings]
  );

  const onMoveMachine = useCallback(() => {
    if (currentMover !== selectedUserMover) {
      // Первый ход в центр если тот не занят
      if (!gameField[1][1]) {
        onMove(1, 1);

        return;
      }

      const { x, y } = getNextMove(calculateMove(gameField, currentMover));

      onMove(x, y);
    }
  }, [currentMover, selectedUserMover, gameField, onMove]);

  useEffect(() => {
    onMoveMachine();
  }, [currentMover]);

  useEffect(() => {
    if (currentMover !== selectedUserMover) {
      onMoveMachine();
    }
  }, [selectedUserMover]);

  const reset = useCallback(() => {
    changeField(getEmptyField());
    changeSettings((prev) => ({
      ...prev,
      currentMover: CROSS,
      endGameResult: EndGameResult.Game,
      currentStep: 0
    }));
  }, [changeField, changeSettings]);

  const changeSelectedUserMover = useCallback(
    (newMover: MoverType) =>
      changeSettings((prev) => ({ ...prev, selectedUserMover: newMover })),
    [changeSettings]
  );

  return {
    gameField,
    settings,
    onMove,
    changeSelectedUserMover,
    reset,
    gameHistory
  };
};

export default useGame;
