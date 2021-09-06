import { selectCellById } from "store/data/cells";
import { ICell } from "types";
import { useSelector } from "hooks";
export function useCell(
  id: number | undefined
): [ICell | undefined, () => void] {
  const data = useSelector((state) => selectCellById(state.data.cells, id));

  function handler() {
    return; // not implemented yet.
  }
  return [data, handler];
}
