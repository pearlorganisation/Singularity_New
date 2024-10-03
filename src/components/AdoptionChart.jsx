import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
//import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const labels = ["June", "July", "August", "September"];

export function AdoptionChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "white",
        },
        position: "top",
      },
      /*title: {
        display: true,
        text: "Chart.js Line Chart",
      },*/
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
      },
    },
    grid: {
      display: true,
    },
  };
  const data = {
    labels,
    datasets: [
      {
        //fill: true,
        label: "Total Number of enterprise clients",
        data: [100, 435, 750, 1103],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderWidth: 2,
      },
      {
        label: "Number of signups each month",
        data: [100, 235, 315, 353],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 2,
      },
    ],
  };
  return <Line className="bg-white/10" options={options} data={data} />;
}
