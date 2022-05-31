/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useLayoutEffect, useCallback, useReducer } from 'react';

// using the same names that react-query uses for convenience
export type FetchStatus = 'idle' | 'pending' | 'rejected' | 'resolved';

function useSafeDispatch<T>(dispatch: React.Dispatch<T>) {
  const mounted = useRef(false);
  useLayoutEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return useCallback(
    (args) => (mounted.current ? dispatch(args) : undefined),
    [dispatch],
  );
}

type InitialState<T> = {
  status: FetchStatus;
  data: null | T;
  error: null;
};
const defaultInitialState = { status: 'idle', data: null, error: null };
/**
  Example usage:
  const {data, error, status, run} = useAsync()
  useEffect(() => {
    run(fetchPokemon(pokemonName))
  }, [pokemonName, run])
*/
export function useAsync<T>(initialState: InitialState<T>) {
  const initialStateRef = useRef({
    ...defaultInitialState,
    ...initialState,
  });
  const [{ status, data, error }, setState] = useReducer(
    (s: InitialState<T>, a: InitialState<T>) => ({ ...s, ...a }),
    initialStateRef.current,
  );

  const safeSetState = useSafeDispatch(setState);

  const setData = useCallback(
    (arg) => safeSetState({ data: arg, status: 'resolved' }),
    [safeSetState],
  );
  const setError = useCallback(
    (err) => safeSetState({ error: err, status: 'rejected' }),
    [safeSetState],
  );
  const reset = useCallback(
    () => safeSetState(initialStateRef.current),
    [safeSetState],
  );

  const run = useCallback(
    (promise: Promise<T>): Promise<T> => {
      if (!promise || !promise.then) {
        throw new Error(
          `The argument passed to useAsync().run must be a promise. Maybe a function that's passed isn't returning anything?`,
        );
      }
      safeSetState({ status: 'pending' });
      return promise.then(
        (ret) => {
          setData(ret);
          return ret;
        },
        (err) => {
          setError(err);
          return Promise.reject(err);
        },
      );
    },
    [safeSetState, setData, setError],
  );

  return {
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isError: status === 'rejected',
    isSuccess: status === 'resolved',

    setData,
    setError,
    error,
    status,
    data,
    run,
    reset,
  };
}
