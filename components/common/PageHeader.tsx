//import node modules libraries
import Link from "next/link";

//import custom components
import { Button } from "../ui/button";

//import helper utility functions
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  className?: string;
  actionBtn?: boolean;
  actionLabel?: string;
  actionBtnIcon?: React.ReactNode;
  actionLink?: string;
  actionBtnVariant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  actionBtnSize?:
    | "default"
    | "sm"
    | "lg"
    | "icon"
    | "icon-sm"
    | "icon-lg"
    | null
    | undefined;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title = "Page Title",
  className,
  actionBtn,
  actionBtnIcon,
  actionLabel,
  actionLink,
  actionBtnVariant,
  actionBtnSize,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between w-full mt-2 mb-6",
        className
      )}
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      {actionBtn && (
        <Link href={actionLink || ""}>
          <Button variant={actionBtnVariant} size={actionBtnSize}>
            {actionBtnIcon && <span>{actionBtnIcon}</span>}
            {actionLabel}
          </Button>
        </Link>
      )}
    </div>
  );
};

export default PageHeader;
