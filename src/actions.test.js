import './setupTests';
import { generateAuralUpdate, restartGame, makeGuess} from './actions';

describe('actions', () => {
  
  
  it('should create a makeGuess action', () => {
    const guess = 34;
    const action = makeGuess(guess);
    expect(action).toEqual({
      type: 'MAKE_GUESS',
      guess: guess 
    });
  });

  it('should create a restartGame action', () => {
    const action = restartGame();
    expect(action).toEqual({
      type: 'RESTART_GAME',
    });
  });

  it('should create a generateAuralUpdate', () => {
    const action = generateAuralUpdate();
    expect(action).toEqual({
      type: 'GENERATE_AURAL_UPDATE'
    });
  });


});
