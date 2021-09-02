import { ActionCreator } from "redux";

import { Thunk } from "store";
import { SetActiveCellAction } from ".";
import { ActionType, GetCellsAction } from "./types";

const getCellsAction: ActionCreator<GetCellsAction> = () => ({
  type: ActionType.GET_CELLS,
  payload: null,
});

export const getCells = (): Thunk => async (dispatch, getState) => {
  dispatch(getCellsAction());
};

const setActiveCellAction: ActionCreator<SetActiveCellAction> = (
  cell: number
) => ({
  type: ActionType.SET_ACTIVE_CELL,
  payload: cell,
});

export const setActiveCell =
  (id: number | undefined): Thunk =>
  async (dispatch, getState) => {
    dispatch(setActiveCellAction(id));
  };
