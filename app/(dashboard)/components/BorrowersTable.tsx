"use client";
//import node modules libraries
import { useState } from "react";
import { Search } from "lucide-react";
import { PaginationState } from "@tanstack/react-table";
import { useDebounce } from "@uidotdev/usehooks";

//import custom components
import DataTable from "@/components/table/DataTable";
import { Input } from "@/components/ui/input";
import { BorrowerTableColumns } from "./ColumnDifinations";

//import custom hooks
import { useBorrowers } from "@/hooks/useBorrowers";

//import custom types
import { BorrowerType } from "@/types";

type BorrowersTableProps = {
  initialData: BorrowerType[];
  totalCount: number;
};

const BorrowersTable: React.FC<BorrowersTableProps> = ({
  initialData,
  totalCount,
}) => {
  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState<PaginationState>({
    pageSize: 10,
    pageIndex: 0,
  });
  const [sortBy, setSortBy] = useState<string>("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const debounceSearchTerm = useDebounce(search, 300);

  const { data, isLoading } = useBorrowers({
    page: pagination.pageIndex + 1,
    limit: pagination.pageSize,
    search: debounceSearchTerm,
    sortBy: sortBy as keyof BorrowerType,
    order,
    initialData: { data: initialData, totalCount },
  });

  const borrowers = data?.data ?? [];
  const total = data?.totalCount ?? totalCount;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4 justify-between items-center max-w-md w-full">
        <div className="flex items-center w-full relative">
          <p className="absolute right-2">
            <Search className="text-primary" />
          </p>
          <Input
            placeholder="Search by customer name..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPagination({ ...pagination, pageIndex: 0 });
            }}
            className="w-full h-11 focus:outline-none focus-visible:ring-0"
          />
        </div>
      </div>

      {/* Table */}
      {isLoading ? (
        <p className="text-sm text-gray-500">Loading...</p>
      ) : (
        <DataTable
          columns={BorrowerTableColumns}
          data={borrowers}
          rowCount={total}
          pagination={pagination}
          onPageChange={setPagination}
          onSortingChange={(sortBy, order) => {
            setSortBy(sortBy);
            setOrder(order);
          }}
        />
      )}
    </div>
  );
};

export default BorrowersTable;
