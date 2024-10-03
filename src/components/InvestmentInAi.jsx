import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      color: "white"
    },
    title: {
      display: true,
      text: "Percentage of workflows automated by Ai",
      color:'white'
    },
  },
};

const labels = [
  "Demand Forecasting",
  "Inventory Management",
  "Route Optimization",
  "Warehouse Management",
  "Supplier Relationship Management",
];

const data = {
  labels,
  datasets: [
    {
      label: "American Companies",
      data: [48, 35,40, 25,30],
      borderColor: "rgb(0, 153, 17)",
      backgroundColor: "rgba(144, 238, 144,1)",
    },
    {
      label: "European Companies",
      data: [40, 30,38, 22,28],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 1)",
    },
  ],
};

export function InvestmentInAi() {
  return <Bar options={options} data={data}/>;
}
