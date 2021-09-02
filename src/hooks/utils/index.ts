import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";

import { ApplicationState } from "store/root";
import { ThunkDispatch } from "store/types";

export function useSelector<T>(selector: (state: ApplicationState) => T) {
  return useReduxSelector((state: ApplicationState) => selector(state));
}

export function useDispatch() {
  return useReduxDispatch<ThunkDispatch>();
}
