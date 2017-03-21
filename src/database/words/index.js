import * as crud from './crud';
import * as subscription from './subscription';
import * as riddle from './riddle';

const exp = {
  ...crud,
  ...subscription,
  ...riddle
};

export { exp };
