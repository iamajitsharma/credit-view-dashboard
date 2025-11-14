"use client";
//import node module libraries
import { Mail, MapPin, Phone } from "lucide-react";
import moment from "moment";

//import custom components
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

//import custom hooks
import { useViewBorrower } from "@/hooks/useBorrowers";

//import helper utility functions
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

  return (
    <Dialog open={isViewBorrowerOpen} onOpenChange={handleViewBorrowerClose}>
      <DialogContent className="max-w-sm md:max-w-xl w-full h-4/5 overflow-y-auto">
        <DialogHeader className="border-b">
          <DialogTitle className="font-semibold text-lg">
            Borrower Details
          </DialogTitle>
        </DialogHeader>

        {/* USER INFO */}
        <div className="flex flex-col md:flex-row items-start gap-4 mt-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src={avatar} alt={customerName} />
            <AvatarFallback className="text-lg font-medium">
              {getInitials(customerName)}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h3 className="text-lg font-semibold">{customerName}</h3>

            <div className="flex flex-col gap-2 mt-3 text-sm text-muted-foreground">
              <div className="flex flex-col gap-2">
                <p className="inline-flex items-center gap-2">
                  <Phone size={18} strokeWidth={1.5} /> {phoneNumber}
                </p>
                <p className="inline-flex items-center gap-2">
                  <Mail size={18} strokeWidth={1.5} /> {email}
                </p>
                <p className="inline-flex items-center gap-2">
                  <MapPin size={18} strokeWidth={1.5} /> {address}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LOAN INFORMATION */}
        <div className="mt-6">
          <h4 className="font-semibold text-base mb-3">Loan Information</h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <InfoCard label="Loan ID" value={loanId} />
            <InfoCard label="Amount Due" value={amountDue} />
            <InfoCard
              label="Due Date"
              value={moment(dueDate).format("Do MMM YYYY")}
            />
            <InfoCard
              label="Last Payment"
              value={moment(lastPayment).format("Do MMM YYYY")}
            />
            <InfoCard label="Status" value={status} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewBorrowerModal;

const InfoCard = ({ label, value }: { label: string; value: any }) => {
  return (
    <div className="border rounded-lg p-3 bg-card shadow-sm hover:shadow-md transition-all">
      <p className="text-xs text-muted-foreground uppercase tracking-wide">
        {label}
      </p>
      <p className="font-medium text-sm mt-1 break-words">{value}</p>
    </div>
  );
};
