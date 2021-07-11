import { CROSS, ZERO } from './constants';
import {
  Cross,
  EndGameLine,
  GameCell,
  GameInfoControl,
  GameRow,
  GameSquare,
  HistoryContainer,
  HistoryItem,
  HistoryTitle,
  Main,
  PosContainer,
  ResetButton,
  ScoreContainer,
  ScoreItem,
  Zero
} from './styles';
import { EndGameResult } from './types';
import useGame from './useGame';

const CONTENT_MAP = {
  [CROSS]: Cross,
  [ZERO]: Zero
};

const App = () => {
  const {
    gameField,
    onMove,
    settings,
    reset,
    gameHistory,
    changeSelectedUserMover
  } = useGame();
  const { currentMover, selectedUserMover, score, endGameResult, currentStep } =
    settings;

  return (
    <Main>
      <div>
        <GameInfoControl>
          <ScoreContainer>
            <ScoreItem
              disabled={currentStep > 0}
              data-current-mover={currentMover === CROSS}
              data-my-side={selectedUserMover === CROSS}
              title={`Играть за ${CROSS}`}
              onClick={() => changeSelectedUserMover(CROSS)}
            >
              <div>{CROSS}</div>
              <div>{score[CROSS]}</div>
            </ScoreItem>
            <div>
              <ResetButton onClick={reset}>&#8635; начать заново</ResetButton>
            </div>
            <ScoreItem
              disabled={currentStep > 0}
              data-current-mover={currentMover === ZERO}
              data-my-side={selectedUserMover === ZERO}
              title={`Играть за ${ZERO}`}
              onClick={() => changeSelectedUserMover(ZERO)}
            >
              <div>{ZERO}</div>
              <div>{score[ZERO]}</div>
            </ScoreItem>
          </ScoreContainer>
        </GameInfoControl>
        <div>
          <GameSquare disabled={endGameResult !== EndGameResult.Game}>
            <EndGameLine endGameResult={endGameResult} />
            {gameField.map((row, x) => (
              <GameRow key={`row_${x}`}>
                {row.map((col, y) => {
                  const key = `${x}_${y}`;
                  if (!col) {
                    return <GameCell key={key} onClick={() => onMove(x, y)} />;
                  }

                  const Component = CONTENT_MAP[col];

                  return (
                    <GameCell key={key}>
                      <Component />
                    </GameCell>
                  );
                })}
              </GameRow>
            ))}
          </GameSquare>
        </div>
      </div>
      <HistoryContainer>
        <HistoryTitle>История:</HistoryTitle>
        {gameHistory.map(({ mover, x, y, message, date }) => (
          <HistoryItem key={`h_${x}_${y}`}>
            <PosContainer>
              ({date?.toLocaleTimeString()}) {mover}: [{x}, {y}]
            </PosContainer>
            {message && <span>{message}</span>}
          </HistoryItem>
        ))}
      </HistoryContainer>
    </Main>
  );
};

export default App;
