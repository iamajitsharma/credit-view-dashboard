//import node modules libraries
import axios from "axios";

//import custom types
import type { BorrowerType, StatItems, AnalyticType } from "@/types";

export interface GetBorrowerProps {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: keyof BorrowerType;
  order?: "asc" | "desc";
  filters?: Record<string, string | number | boolean>;
}

export interface GetBorrowerResponse {
  data: BorrowerType[];
  totalCount: number;
  error?: string;
}

const API_BASE_URL = "https://6462123f491f9402f4b1b84b.mockapi.io/api/v1";

export default async function getBorrower({
  page = 1,
  limit = 10,
  search,
  sortBy,
  order,
  filters = {},
}: GetBorrowerProps): Promise<GetBorrowerResponse> {
  console.log(page, "Page Index from server");

  try {
    const params = new URLSearchParams({
      page: String(page),
      limit: String(limit),
    });

    if (search) params.append("search", search);
    if (sortBy) params.append("sortBy", String(sortBy));
    if (order) params.append("order", order);

    // Append any extra filters like ?status=Overdue
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "")
        params.append(key, String(value));
    });

    console.log(params, "Params In every request");

    const response = await axios.get(
      `${API_BASE_URL}/borrower?${params.toString()}`
    );

    // 👇 Fetch total count (no pagination)
    const { data: allBorrowers } = await axios.get<BorrowerType[]>(
      `${API_BASE_URL}/borrower`
    );

    // Handling 404 error
    if (response.status === 404) {
      return {
        data: [],
        totalCount: 0,
        error: "Not Found",
      };
    }

    return {
      data: response.data,
      totalCount: allBorrowers.length,
    };
  } catch (error: any) {
    // console.error("getBorrower Error:", error.message);
    return {
      data: [],
      totalCount: 0,
      error: error.message || "Failed to fetch borrowers",
    };
  }
}

export async function getAnalyticData(): Promise<AnalyticType> {
  try {
    const { data: allBorrowers } = await axios.get<BorrowerType[]>(
      `${API_BASE_URL}/borrower`
    );

    if (!allBorrowers.length) {
      return {
        statItems: [],
        chartData: {},
      };
    }

    const totalLoanAmount = allBorrowers.reduce((a, b) => a + b.loanAmount, 0);
    const totalAmountDue = allBorrowers.reduce((a, b) => a + b.amountDue, 0);
    const totalRecovered = totalLoanAmount - totalAmountDue;

    const overdueCount = allBorrowers.filter(
      (b) => new Date(b.dueDate) < new Date() && b.amountDue > 0
    ).length;

    const overduePercentage = Number(
      ((overdueCount / allBorrowers.length) * 100).toFixed(2)
    );

    const stats: StatItems[] = [
      { title: "Loan Amount", value: totalLoanAmount, type: "currency" },
      { title: "Amount Due", value: totalAmountDue, type: "currency" },
      { title: "Recovered", value: totalRecovered, type: "currency" },
      // { title: "Total Borrowers", value: allBorrowers.length, type: "number" },
      {
        title: "Overdue Percent",
        value: overduePercentage,
        type: "percent",
      },
    ];

    const totalRecoveredPercent = Math.round(
      (totalRecovered / totalLoanAmount) * 100
    );

    // Bar Chart
    const barSeries = [
      {
        name: "Financial Metrics",
        data: stats.map((item) => item.value),
      },
    ];
    const barCategories = stats.map((item) => item.title);

    // Donut Chart
    const donutSeries = [overduePercentage, totalRecoveredPercent];

    return {
      statItems: stats,
      chartData: {
        bar: {
          series: barSeries,
          categories: barCategories,
        },
        donut: {
          series: donutSeries,
          categories: ["Overdue Percentage", "Total Recovered"],
        },
      },
    };
  } catch (error) {
    console.log(error, "Error while fetching analytics data");
    return {
      statItems: [],
      chartData: {},
    };
  }
}
