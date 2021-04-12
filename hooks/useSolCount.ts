import { useContext } from 'react';
import { SolCountContext } from '@/providers/SolCountProvider';

const useSolCount = () => {
  const context = useContext(SolCountContext);

  if (context === undefined) {
    throw new Error('useSolCount must be used within a SolCountProvider');
  }

  const { state, dispatch } = context;

  const increment = () => dispatch({ type: 'increment' });
  const decrement = () => dispatch({ type: 'decrement' });
  const set = (value: number) => dispatch({ type: 'set', payload: value });

  return { ...state, increment, decrement, set };
};

export default useSolCount;
