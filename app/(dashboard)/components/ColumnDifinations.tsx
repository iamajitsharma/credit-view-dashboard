//import node modules libraries
import { BorrowerType } from "@/types";
import { Eye, Phone } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";

//import custom components
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

//import custom hooks
import { useViewBorrower } from "@/hooks/useBorrowers";

//import helper utility function
import { getInitials } from "@/lib/utils";

export const BorrowerTableColumns: ColumnDef<BorrowerType>[] = [
  {
    accessorKey: "loanId",
    header: "Loan ID",
  },
  {
    accessorKey: "customerName",
    header: "Customer Name",
    cell: ({ row }) => {
      const imageSrc = row.original.avatar;
      const customerName = row.original.customerName;

      return (
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={imageSrc} alt={customerName} />
            <AvatarFallback>{getInitials(customerName)}</AvatarFallback>
          </Avatar>
          <div>
            <p>{customerName}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
    cell: ({ row }) => {
      return (
        <div>
          <p className="inline-flex items-center gap-1 text-sm">
            <span className="text-neutral-500">
              <Phone size={16} />
            </span>
            {row.original.phoneNumber}
          </p>
        </div>
      );
    },
  },

  {
    accessorKey: "loanAmount",
    header: "Loan Amount",
  },
  {
    accessorKey: "amountDue",
    header: "Amount Due",
  },
  {
    accessorKey: "lastPayment",
    header: "Last Payment On",
    cell: ({ row }) => {
      return <p>{moment(row.original.lastPayment).format("Do MMM YYYY")}</p>;
    },
  },
  {
    accessorKey: "dueDate",
    header: "Due Date",
    cell: ({ row }) => {
      return <p>{moment(row.original.dueDate).format("Do MMM YYYY")}</p>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      const badgeColor =
        status === "Paid"
          ? `bg-green-100`
          : status === "Overdue"
          ? "bg-rose-100"
          : status === "Pending"
          ? "bg-amber-100"
          : status === "Written Off"
          ? "bg-rose-100"
          : status === "Settled"
          ? "bg-sky-100"
          : "bg-sky-100";

      const badgeTextColor =
        status === "Paid"
          ? `text-green-600`
          : status === "Overdue"
          ? "text-rose-600"
          : status === "Pending"
          ? "text-amber-600"
          : status === "Written Off"
          ? "text-rose-500"
          : status === "Settled"
          ? "text-sky-500"
          : "text-sky-600";
      return (
        <Badge className={`${badgeColor} ${badgeTextColor} rounded`}>
          {row.original.status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "",
    header: "Action",
    cell: ({ row }) => {
      const { handleViewBorrowerOpen } = useViewBorrower();
      return (
        <div className="flex items-center gap-2">
          <Button
            size={"sm"}
            variant={"secondary"}
            onClick={() => handleViewBorrowerOpen(row.original)}
          >
            <Eye size={16} /> View Details
          </Button>
        </div>
      );
    },
  },
];
