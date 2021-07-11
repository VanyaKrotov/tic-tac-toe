import { TreeSearchResult } from './types';

export const getEmptyField = () => [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export const CROSS = 'X';

export const ZERO = 'O';

export const GAME_FIELD_SIZE = 3;

export const createResult = (): TreeSearchResult => [
  [
    { result: 0, steps: 0 },
    { result: 0, steps: 0 },
    { result: 0, steps: 0 }
  ],
  [
    { result: 0, steps: 0 },
    { result: 0, steps: 0 },
    { result: 0, steps: 0 }
  ],
  [
    { result: 0, steps: 0 },
    { result: 0, steps: 0 },
    { result: 0, steps: 0 }
  ]
];
