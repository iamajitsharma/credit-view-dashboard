export type BorrowerType = {
  id: string;
  loanId: string;
  customerName: string;
  avatar: string;
  email: string;
  phoneNumber: string;
  address: string;
  loanAmount: number;
  amountDue: number;
  lastPayment: string;
  dueDate: string;
  status: "Paid" | "Overdue" | "Settled" | "Closed" | "Written Off" | "Pending";
  createdAt: string;
};

export type StatItems = {
  title: string;
  value: number;
  type: "currency" | "number" | "percent";
};

export type DonutChartSeries = number[];
export type BarChartSeries = { name: string; data: number[] }[];

export type AnalyticType = {
  statItems: StatItems[];
  chartData: {
    bar?: {
      series: BarChartSeries;
      categories: string[];
    };
    donut?: {
      series: DonutChartSeries;
      categories: string[];
    };
  };
};

export interface AnalyticsChartProps {
  chartData: BarChartSeries;
  categories: string[];
}

export interface AnalyticsDonutChartProps {
  chartData: DonutChartSeries;
  categories: string[];
}
