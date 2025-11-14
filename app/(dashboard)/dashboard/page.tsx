//import node modules libraries
import { Fragment } from "react";
import { Plus } from "lucide-react";
import { Metadata } from "next";

//import custom componentns
import BorrowersTable from "../components/BorrowersTable";
import PageHeader from "@/components/common/PageHeader";
import ViewBorrowerModal from "../components/ViewBorrowerModal";

//import server actions
import getBorrower from "@/app/actions";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "E-Solve",
};

const Borrowers = async () => {
  const borrower = await getBorrower({ page: 1, limit: 10 }); //Fetching initial data server side

  return (
    <Fragment>
      <section>
        <PageHeader
          title="Dashboard"
          actionBtn
          actionLabel="Add New Borrower"
          actionBtnVariant={"default"}
          actionBtnIcon={<Plus size={20} />}
        />
        <BorrowersTable
          initialData={borrower.data}
          totalCount={borrower.totalCount}
        />
      </section>
      <ViewBorrowerModal />
    </Fragment>
  );
};

export default Borrowers;
