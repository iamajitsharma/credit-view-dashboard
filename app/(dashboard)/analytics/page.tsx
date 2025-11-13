//import node modules libraries
import { Metadata } from "next";
//import custom components
import DashboardStatsGrid from "../components/DashboardStatsGrid";
import AnalyticsBarChart from "../components/AnalyticsBarChart";
import AnalyticsDonutChart from "../components/AnalyticsDonutChart";

//import server actions
import { getAnalyticData } from "@/app/actions";

export const metadata: Metadata = {
  title: "Analytics",
  description: "E-Solve",
};

const Analytics = async () => {
  const data = await getAnalyticData();

  console.log(data, "Analytics");

  return (
    <section>
      <DashboardStatsGrid data={data.statItems} />
      <div className="flex items-start gap-8 mt-8">
        <div className="w-8/12">
          {data.chartData.bar && (
            <AnalyticsBarChart
              categories={data.chartData.bar?.categories}
              chartData={data.chartData.bar.series}
            />
          )}
        </div>
        <div className="w-4/12">
          {data.chartData.donut && (
            <AnalyticsDonutChart
              chartData={data.chartData.donut?.series}
              categories={data.chartData.donut?.categories}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Analytics;
