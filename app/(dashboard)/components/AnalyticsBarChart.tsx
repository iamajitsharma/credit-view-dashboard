"use client";
//import custom components
import ApexCharts from "@/components/charts/ApexChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

//import custom types
import { AnalyticsChartProps } from "@/types";

const AnalyticsBarChart = ({ chartData, categories }: AnalyticsChartProps) => {
  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
      fontFamily: "Poppins, sans-serif",
    },

    xaxis: {
      categories: categories,
      labels: {
        rotate: -45,
        style: { fontSize: "12px" },
      },
    },

    yaxis: {
      labels: {
        formatter: (value: number) => value.toLocaleString(),
      },
    },

    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: "45%",
      },
    },

    dataLabels: {
      enabled: true,
      formatter: (val: number) => val.toLocaleString(),
    },

    tooltip: {
      y: {
        formatter: (val: number) => val.toLocaleString(),
      },
    },

    legend: {
      position: "top",
    },

    colors: ["#10b981"], // Tailwind emerald-500
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Loan Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ApexCharts
          options={options}
          series={chartData}
          type={"bar"}
          height={380}
          width={"100%"}
        />
      </CardContent>
    </Card>
  );
};

export default AnalyticsBarChart;
