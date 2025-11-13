import React from "react";
import { Table } from "@tanstack/react-table";

const TablePagination = () => {
  return (
    <div className="flex items-center justify-between mt-3">
      {/* <button
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Previous
      </button>
      <span>
        Page {pageIndex + 1} of {table.getPageCount()}
      </span>
      <button
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next
      </button> */}
    </div>
  );
};

export default TablePagination;
