import { selectCenter, setCenter } from "store/ui/theme";
import { useDispatch, useSelector } from "hooks";
import { LatLngLiteral } from "leaflet";

export function useCenter(): [
  LatLngLiteral | null,
  (center: LatLngLiteral) => void
] {
  const dispatch = useDispatch();

  const data = useSelector((state) => selectCenter(state.ui.theme));

  function handler(center: LatLngLiteral) {
    dispatch(setCenter(center));
  }

  return [data, handler];
}
