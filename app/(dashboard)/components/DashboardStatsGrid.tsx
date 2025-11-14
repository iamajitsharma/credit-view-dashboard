//import custom components
import StatsCard from "./StatsCard";

//import custom types
import { StatItems } from "@/types";

interface DashboardStatsProps {
  data: StatItems[];
}

const DashboardStatsGrid: React.FC<DashboardStatsProps> = ({ data }) => {
  console.log(data, "From Dash Grid");
  return (
    <section>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <StatsCard key={item.title} data={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default DashboardStatsGrid;
