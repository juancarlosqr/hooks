import { createContext, ReactNode, useReducer } from 'react';

// context
type SolCountState = {
  sol: number;
};
type SolCountAction =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'set'; payload: number };
type SolCountDispatch = (action: SolCountAction) => void;
type SolCountValue = {
  state: SolCountState;
  dispatch: SolCountDispatch;
};
export const SolCountContext = createContext<SolCountValue | undefined>(
  undefined
);

// intial state
const solInitialState = { sol: 0 };

// reducer
function solReducer(state: SolCountState, action: SolCountAction) {
  switch (action.type) {
    case 'increment': {
      return { sol: state.sol + 1 };
    }
    case 'decrement': {
      return { sol: state.sol > 0 ? state.sol - 1 : 0 };
    }
    case 'set': {
      return { sol: action.payload ?? 0 };
    }
    default: {
      throw new Error(`Unsupported action type`);
    }
  }
}

// initializer
function solInitializer(initialState: SolCountState) {
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
