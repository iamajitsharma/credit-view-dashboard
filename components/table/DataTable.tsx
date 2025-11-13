"use client";
//import node modules libraries
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  ColumnDef,
  PaginationState,
  SortingState,
  Updater,
  OnChangeFn,
} from "@tanstack/react-table";
import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

//import custom components
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "../ui/table";
import { Button } from "../ui/button";

interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  pagination: PaginationState;
  rowCount: number;
  onPageChange: OnChangeFn<PaginationState>;
  onSortingChange: (columnId: string, direction: "asc" | "desc") => void;
}

export function DataTable<T extends object>({
  data,
  columns,
  rowCount,
  pagination,
  onPageChange,
  onSortingChange,
}: DataTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    manualPagination: true,
    manualSorting: true,
    rowCount: rowCount,
    state: {
      sorting,
      pagination,
    },
    onPaginationChange: onPageChange,
    onSortingChange: (update: Updater<SortingState>) => {
      const newSorting =
        typeof update === "function" ? update(sorting) : update;

      setSorting(newSorting);

      if (newSorting.length === 0) {
        onSortingChange("", "asc");
        return;
      }

      const s = newSorting[0];
      onSortingChange(s.id, s.desc ? "desc" : "asc");
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <div className="w-full">
      <Table>
        <TableHeader className="bg-gray-200 text-xs">
          {table.getHeaderGroups().map((group) => (
            <TableRow key={group.id}>
              {group.headers.map((header) => {
                const sorted = header.column.getIsSorted();
                return (
                  <TableHead
                    key={header.id}
                    className="cursor-pointer select-none"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <p className="inline-flex items-center gap-1">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      <span>
                        {sorted === "asc" ? (
                          <ArrowUp size={14} className="text-primary" />
                        ) : sorted === "desc" ? (
                          <ArrowDown size={14} className="text-primary" />
                        ) : (
                          ""
                        )}
                      </span>
                    </p>
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center h-24">
                No results found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex justify-end items-center mt-6 gap-4">
        <Button
          className="px-3 py-1rounded"
          variant={!table.getCanPreviousPage() ? "secondary" : "default"}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>

        <span className="text-sm">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount().toLocaleString()}
        </span>

        <Button
          className="px-3 py-1rounded"
          variant={!table.getCanPreviousPage() ? "secondary" : "default"}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default DataTable;
