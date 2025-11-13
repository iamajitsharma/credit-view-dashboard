"use client";
//import node modules libraries
import { Mail, MapPin, Phone } from "lucide-react";
import moment from "moment";

//import custom components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

//import custom hooks
import { useViewBorrower } from "@/hooks/useBorrowers";

//import helper utility function
import { getInitials } from "@/lib/utils";

const ViewBorrowerModal = () => {
  const { isViewBorrowerOpen, handleViewBorrowerClose, selectedBorrower } =
    useViewBorrower();

  if (!selectedBorrower) return null;

  const {
    avatar,
    customerName,
    phoneNumber,
    email,
    address,
    amountDue,
    dueDate,
    lastPayment,
    loanId,
    status,
  } = selectedBorrower;

  const tableData = [
    {
      loanId,
      amountDue,
      lastPayment,
      dueDate,
      status,
    },
  ];

  return (
    <Dialog open={isViewBorrowerOpen} onOpenChange={handleViewBorrowerClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <DialogTitle className="font-medium text-base">
            Borrower Details
          </DialogTitle>
        </DialogHeader>
        <div>
          <div className="flex items-start gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={avatar} alt={customerName} sizes="" />
              <AvatarFallback>{getInitials(customerName)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h4>{customerName}</h4>
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex items-center gap-3">
                  <p className="inline-flex items-center gap-2 text-neutral-500 text-sm">
                    <span>
                      <Phone size={18} strokeWidth={1.5} />
                    </span>
                    {phoneNumber}
                  </p>
                  <p className="inline-flex items-center gap-2 text-neutral-500 text-sm">
                    <span>
                      <Mail size={18} strokeWidth={1.5} />
                    </span>
                    {email}
                  </p>
                </div>
                <p className="inline-flex items-center gap-2 text-neutral-500 text-sm">
                  <span>
                    <MapPin size={18} strokeWidth={1.5} />
                  </span>
                  {address}
                </p>
              </div>
            </div>
          </div>
          {/* Loan Information */}
          <div className="mt-4 ">
            <Table border={1} className="border overflow-hidden">
              <TableHeader className="bg-neutral-100 text-xs border">
                <TableRow>
                  <TableHead className="w-[100px]">Loan ID</TableHead>
                  <TableHead className="w-[100px]">Amount Due</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Last Payment</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="border">
                {tableData.map((item) => (
                  <TableRow key={item.loanId} className="border text-center">
                    <TableCell className="font-medium border">
                      {item.loanId}
                    </TableCell>
                    <TableCell>{item.amountDue}</TableCell>
                    <TableCell className="border">
                      {moment(item.dueDate).format("Do MMM YYYY")}
                    </TableCell>
                    <TableCell>
                      {moment(item.lastPayment).format("Do MMM YYYY")}
                    </TableCell>
                    <TableCell className="border">{item.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewBorrowerModal;
