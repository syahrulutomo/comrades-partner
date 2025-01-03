import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Spin } from "antd";
import { tokenGuidelines } from "../../config/antd";

export type SummaryChartData = {
  field: string;
  value: string;
};


interface SummaryDashboardData {
  title: string
  chartData: SummaryChartData[];
}

export const BarChart = ({ title, chartData }: SummaryDashboardData) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const config = {
    labels: chartData?.map((item) => item.field),
    datasets: [
      {
        fill: true,
        label: "",
        data: chartData?.map((item) => item.value),
        borderColor: tokenGuidelines.G500,
        backgroundColor: tokenGuidelines.G500,
        borderRadius: 4,
        tickBorderDash: 0,
        lineWidth: 0,
        tickWidth: 31,
      },
    ],
  };

  return (
    <div className="mt-6 p-6 rounded-md border-2 border-neutral-100 bg-white">
      <p className="font-medium mb-4">{title}</p>
      <div className="relative rounded-lg border-neutral-20 border-[1px] p-2 md:!p-6">
        {config && options ? (
          <Bar data={config} options={options} />
        ) : (
          <Spin className="w-6 h-2 bg-primary-main" />
        )}
      </div>
    </div>
  );
};
