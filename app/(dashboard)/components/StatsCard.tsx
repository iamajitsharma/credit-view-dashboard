//import node modules libraries
import { Banknote, HandCoins, Landmark, Wallet } from "lucide-react";

//import custom types
import { StatItems } from "@/types";

interface StatsCardProps {
  data: StatItems;
  index: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ data, index }) => {
  // Destructuring Data
  const { title, type, value } = data;

  const formattedValue =
    type === "currency"
      ? `₹${value.toLocaleString()}`
      : type === "percent"
      ? value + "%"
      : value.toLocaleString();

  // ICON LIST
  const icons = [HandCoins, Landmark, Wallet, Banknote];

  // Pick icon based on index
  const IconComponent = icons[index] || icons[0];

  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white dark:bg-neutral-900">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="text-xs md:text-sm font-medium text-neutral-600 dark:text-neutral-400">
          <p>{title}</p>
        </div>
        <div className="flex-flex-shrink-0 w-7 aspect-square bg-orange-300 text-white flex items-center justify-center rounded">
          <span>
            <IconComponent size={18} />
          </span>
        </div>
      </div>
      {/* Content */}
      <div className="py-3">
        <div className="text-base md:text-2xl font-bold">
          <h2>{formattedValue}</h2>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
