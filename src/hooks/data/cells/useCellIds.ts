import { useSelector } from "hooks";
import { selectCellIds } from "store/data/cells";

export function useCellIds() {
  return useSelector((state) => selectCellIds(state.data.cells));
}
