"use client";
//import node modules libraries
import { useTheme } from "next-themes";

//import custom components
import ApexCharts from "@/components/charts/ApexChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

//import custom types
import { AnalyticsChartProps } from "@/types";

const AnalyticsBarChart = ({ chartData, categories }: AnalyticsChartProps) => {
  const { resolvedTheme } = useTheme();

  const labelColor = resolvedTheme === "dark" ? "#fff" : "#000";

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
        style: { fontSize: "12px", colors: labelColor },
      },
    },

    yaxis: {
      labels: {
        formatter: (value: number) => value.toLocaleString(),
        style: { colors: labelColor },
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
      enabled: false,
    },

    tooltip: {
      y: {
        formatter: (val: number) => val.toLocaleString(),
      },
    },

    legend: {
      position: "top",
    },

    colors: ["#10b981"],
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
          height={284}
          width={"100%"}
        />
      </CardContent>
    </Card>
  );
};

export default AnalyticsBarChart;
