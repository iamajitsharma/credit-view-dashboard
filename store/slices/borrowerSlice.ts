import { BorrowerType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateProps {
  isViewBorrowerOpen: boolean;
  selectedBorrower: BorrowerType | null;
}

const initialState: InitialStateProps = {
  isViewBorrowerOpen: false,
  selectedBorrower: null,
};

const borrowerSlice = createSlice({
  name: "borrower",
  initialState,
  reducers: {
    toggleViewBorrower(state, action: PayloadAction<{ isOpen: boolean }>) {
      state.isViewBorrowerOpen = action.payload.isOpen;
    },
    selectBorrower(
      state,
      action: PayloadAction<{ borrower: BorrowerType | null }>
    ) {
      state.selectedBorrower = action.payload.borrower;
    },
  },
});

export const { toggleViewBorrower, selectBorrower } = borrowerSlice.actions;

export default borrowerSlice.reducer;
