//import custom components
import ApexCharts from "@/components/charts/ApexChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

//import custom types
import { AnalyticsDonutChartProps } from "@/types";

const AnalyticsDonutChart = ({
  chartData,
  categories,
}: AnalyticsDonutChartProps) => {
  console.log(chartData, "Chart Data");

  const options = {
    labels: categories,
    colors: ["#00a76f", "#ffab00"],
    chart: {
      type: "donut",
      height: 377,
      fontFamily: "Poppins, sans-serif",
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        blur: 0,
        opacity: 0,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
        },
      },
    },
    stroke: {
      width: 0,
    },
    responsive: [
      {
        breakpoint: 1400,
        options: {
          chart: {
            type: "donut",
            width: 290,
            height: 330,
          },
        },
      },
    ],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Collection Overview</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <ApexCharts
          options={options}
          series={chartData}
          type={"donut"}
          height={380}
          width={380}
        />
      </CardContent>
    </Card>
  );
};

export default AnalyticsDonutChart;
