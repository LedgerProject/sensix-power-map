import { selectActiveCell } from "store/data/cells";
import { useSelector, useDispatch } from "hooks";
import { setActiveCell } from "store/data/cells";

export function useActiveCell(): [
  number | null,
  (id: number | undefined) => void
] {
  const dispatch = useDispatch();

  const data = useSelector((state) => selectActiveCell(state.data.cells));

  function handler(id: number | undefined) {
    dispatch(setActiveCell(id));
  }

  return [data, handler];
}
