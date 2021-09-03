import { selectActiveCell } from "store/data/cells";
import { useSelector, useDispatch } from "hooks";
import { setActiveCell } from "store/data/cells";

export function useActiveCell(): [number | null, (id: number | null) => void] {
  const dispatch = useDispatch();

  const data = useSelector((state) => selectActiveCell(state.data.cells));

  function handler(id: number | null) {
    dispatch(setActiveCell(id));
  }

  return [data, handler];
}
