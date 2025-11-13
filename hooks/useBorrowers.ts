//import node modules libraries
import { keepPreviousData, useQuery } from "@tanstack/react-query";

//import server actions
import getBorrower, {
  GetBorrowerProps,
  GetBorrowerResponse,
} from "@/app/actions";

//import custom hooks
import { useAppDispatch, useAppSelector } from "@/store/store";

//import redux slices
import {
  selectBorrower,
  toggleViewBorrower,
} from "@/store/slices/borrowerSlice";

//import custom types
import { BorrowerType } from "@/types";

export interface UseBorrowerProps extends GetBorrowerProps {
  initialData?: GetBorrowerResponse; // optional initial dataset
}

export function useBorrowers({
  initialData,
  page,
  limit,
  search,
  sortBy,
  order,
  filters,
}: UseBorrowerProps) {
  console.log(search, "Search Query");

  return useQuery({
    queryKey: [
      "borrowers",
      page,
      limit,
      search,
      sortBy,
      order,
      JSON.stringify(filters),
    ],
    queryFn: () => getBorrower({ page, limit, search, sortBy, order, filters }),
    placeholderData: keepPreviousData,
    initialData,
  });
}

export function useViewBorrower() {
  const dispatch = useAppDispatch();

  const isViewBorrowerOpen = useAppSelector(
    (state) => state.borrower.isViewBorrowerOpen
  );

  const selectedBorrower: BorrowerType | null = useAppSelector(
    (state) => state.borrower.selectedBorrower
  );

  const handleViewBorrowerClose = () => {
    dispatch(selectBorrower({ borrower: null }));
    dispatch(toggleViewBorrower({ isOpen: false }));
  };

  const handleViewBorrowerOpen = (borrower: BorrowerType) => {
    dispatch(selectBorrower({ borrower: borrower }));
    dispatch(toggleViewBorrower({ isOpen: true }));
  };

  return {
    isViewBorrowerOpen,
    selectedBorrower,
    handleViewBorrowerClose,
    handleViewBorrowerOpen,
  };
}
