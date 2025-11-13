"use client";
//import node modules libraries
import dynamic from "next/dynamic";
import { Props as ApexProps } from "react-apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export type ChartType =
  | "line"
  | "area"
  | "bar"
  | "pie"
  | "donut"
  | "radialBar"
  | "scatter"
  | "bubble"
  | "heatmap"
  | "candlestick"
  | "boxPlot"
  | "radar"
  | "polarArea"
  | "rangeBar"
  | "rangeArea"
  | "treemap"
  | undefined;

interface ApexChartProps {
  options: object;
  series: ApexProps["series"];
  width?: string | number;
  type: ChartType;
  height?: string | number;
}

const ApexCharts = ({
  options,
  series,
  width = "100%",
  type = "bar",
  height = "100%",
}: ApexChartProps) => {
  return (
    <Chart
      options={options}
      series={series}
      type={type}
      width={width}
      height={height}
    />
  );
};

export default ApexCharts;
