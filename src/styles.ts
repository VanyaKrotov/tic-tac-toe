import styled from 'styled-components';
import { EndGameResult } from './types';

export const Main = styled.div`
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GameSquare = styled.div<{ disabled?: boolean }>`
  width: 600px;
  height: 600px;
  margin: auto;
  background: #f7f7f7;
  border-radius: 20px;
  position: relative;

  ${({ disabled = false }) =>
    disabled &&
    `
        opacity: 0.6;
        pointer-events: none;
  `}
`;

export const GameCell = styled.div`
  width: 33.2%;
  cursor: pointer;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Cross = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 6px;
    background: #545454;
    top: 50%;
  }

  ::before {
    transform: rotate(45deg);
  }

  ::after {
    transform: rotate(-45deg);
  }
`;

export const Zero = styled.div`
  width: 80%;
  height: 80%;
  border: 6px solid #545454;
  border-radius: 100%;
`;

export const GameRow = styled.div`
  display: flex;
  height: 33%;

  :not(:last-of-type) {
    border-bottom: 4px solid turquoise;
  }

  & > div:not(:last-of-type) {
    border-right: 4px solid turquoise;
  }
`;

export const HistoryContainer = styled.div`
  margin-left: 20px;
  min-height: 650px;
  max-height: 650px;
  width: 400px;
  overflow-y: auto;
  margin-top: 20px;
`;

export const GameInfoControl = styled.div`
  margin: 30px 0px;
`;

export const ScoreContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const ScoreItem = styled.div<{ disabled?: boolean }>`
  width: 120px;
  height: 20px;
  border: 2px solid #545454;
  border-radius: 6px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 10px;
  position: relative;

  ${({ disabled = false }) =>
    disabled ? `pointer-events: none;` : `cursor: pointer;`}

  &[data-current-mover='true'] {
    border: 2px solid turquoise;
  }

  & > div:first-of-type {
    color: #545454;
  }

  & > div:last-of-type {
    color: #919191;
  }

  &[data-my-side='true'] {
    ::before {
      content: 'Вы';
      position: absolute;
      top: -20px;
      left: 0px;
      text-align: center;
      color: turquoise;
    }
  }
`;

export const ResetButton = styled.button`
  background: turquoise;
  color: #545454;
  border: none;
  font-size: 14px;
  padding: 4px 10px;
  font-weight: bold;
  border-radius: 10px;

  :enabled:hover {
    background: #22f1dc;
  }

  :enabled:active {
    background: #1ad4c1;
  }

  :enabled {
    cursor: pointer;
  }
`;

const END_GAME_STYLE_MAP: { [key: number]: string } = {
  [EndGameResult.Game]: ` display: none; `,
  [EndGameResult.None]: ` display: none; `,
  [EndGameResult.Horizontal_0]: ` 
    top: 15%;
    width: 94%;
    left: 3%; 
  `,
  [EndGameResult.Horizontal_1]: ` 
    top: calc(50% - 3px);
    width: 94%;
    left: 3%; 
  `,
  [EndGameResult.Horizontal_2]: ` 
    top: calc(85% - 10px);
    width: 94%;
    left: 3%; 
   `,
  [EndGameResult.Vertical_0]: `
    transform: rotate(90deg);
    top: calc(50% - 5px);
    width: 94%;
    left: -30%;
  `,
  [EndGameResult.Vertical_1]: `
    transform: rotate(90deg);
    top: calc(50% - 5px);
    width: 94%;
    left: 3%;
  `,
  [EndGameResult.Vertical_2]: `
    transform: rotate(90deg);
    top: calc(50% - 5px);
    width: 94%;
    left: 36%;
  `,
  [EndGameResult.LeftDiagonal]: `
    transform: rotate(45deg);
    top: calc(50% - 5px);
  `,
  [EndGameResult.RightDiagonal]: `
    transform: rotate(-45deg);
    top: calc(50% - 5px);
  `
};

export const EndGameLine = styled.div<{ endGameResult: EndGameResult }>`
  background: tomato;
  height: 10px;
  width: 100%;
  position: absolute;
  z-index: 3;

  ${({ endGameResult }) => END_GAME_STYLE_MAP[endGameResult]}
`;

export const HistoryTitle = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const HistoryItem = styled.div`
  font-size: 14px;
`;

export const PosContainer = styled.span`
  font-size: 12px;
  color: darkgray;
  margin-right: 10px;
`;
