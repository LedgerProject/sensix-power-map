import { useSelector } from "hooks";
import { selectActiveTheme, toggleTheme, Theme } from "store/ui/theme";
import { useDispatch } from "hooks";

export function useActiveTheme(): [Theme, () => void] {
  const dispatch = useDispatch();
  const activeTheme = useSelector((state) => selectActiveTheme(state.ui.theme));

  function handler() {
    dispatch(toggleTheme());
  }

  return [activeTheme, handler];
}
