import { createContext, ReactNode, useReducer } from 'react';

// context
type SolCountState = {
  show: boolean;
  sol: number;
};
type SolCountAction =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'set'; payload: number }
  | { type: 'toggle' };
type SolCountDispatch = (action: SolCountAction) => void;
type SolCountValue = {
  state: SolCountState;
  dispatch: SolCountDispatch;
};
export const SolCountContext = createContext<SolCountValue | undefined>(
  undefined
);

// intial state
const solInitialState = { show: false, sol: 0 };

// reducer
function solReducer(state: SolCountState, action: SolCountAction) {
  switch (action.type) {
    case 'increment': {
      return { ...state, sol: state.sol + 1 };
    }
    case 'decrement': {
      return { ...state, sol: state.sol > 0 ? state.sol - 1 : 0 };
    }
    case 'set': {
      return { ...state, sol: action.payload ?? 0 };
    }
    case 'toggle': {
      return { ...state, show: !state.show };
    }
    default: {
      throw new Error(`Unsupported action type`);
    }
  }
}

// initializer
function solInitializer(initialState: SolCountState) {
  // for some expensive computation to calculate the value,
  // or value is dependant on external sources like localStorage
  // this will block rendering
  return initialState;
}

// provider
type SolCountProviderProps = {
  children: ReactNode;
};

const SolCountProvider = ({ children }: SolCountProviderProps) => {
  const [state, dispatch] = useReducer(
    solReducer,
    solInitialState,
    solInitializer
  );
  const value = { state, dispatch };

  return (
    <SolCountContext.Provider value={value}>
      {children}
    </SolCountContext.Provider>
  );
};

export default SolCountProvider;
