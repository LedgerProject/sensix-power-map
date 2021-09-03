import { CellStatus } from "types";
import { Colors } from "environment";

export function useStatusColors() {
  function mapStatusToColors(status: CellStatus): string {
    switch (status) {
      case CellStatus.Critical: {
        return Colors.paleRed;
      }
      case CellStatus.Warning: {
        return Colors.sunglow;
      }
      case CellStatus.Optimal: {
        return Colors.green;
      }
      default: {
        return Colors.alto;
      }
    }
  }
  return mapStatusToColors;
}
