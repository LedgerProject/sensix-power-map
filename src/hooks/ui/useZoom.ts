import { selectZoom, setZoom } from "store/ui/theme";
import { useDispatch, useSelector } from "hooks";

export function useZoom(): [number | null, (zoom: number) => void] {
  const dispatch = useDispatch();

  const data = useSelector((state) => selectZoom(state.ui.theme));

  function handler(zoom: number) {
    dispatch(setZoom(zoom));
  }

  return [data, handler];
}
