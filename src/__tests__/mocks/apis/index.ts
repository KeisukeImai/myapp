import { SetupWorker, setupWorker } from 'msw';
import { example1 } from './example1';

// mock api regist
const apis = [example1];

export const worker = setupWorker(...apis);
