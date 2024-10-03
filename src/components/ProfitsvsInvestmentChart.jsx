import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from "chart.js";
  import { Scatter } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  
  const labels = ["June", "July", "August", "September"];
  
  export function ProfitVsAIInvestmentScatterChart() {
    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: false, // Remove legend for scatter plot
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "AI Investment (in millions)",
            color: "white",
          },
          ticks: {
            color: "white",
          },
        },
        y: {
          title: {
            display: true,
            text: "Profits (in millions)",
            color: "white",
          },
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
          label: "Profits vs. AI Investment",
          data: [
            { x: 2, y: 5 },  // Replace with your actual data for June
            { x: 3, y: 7 },  // Replace with your actual data for July
            { x: 4, y: 9 },  // Replace with your actual data for August
            { x: 5, y: 12 }, // Replace with your actual data for September
          ],
          pointBackgroundColor: "rgb(53, 162, 235)",
          pointRadius: 5,
        },
      ],
    };
  
    return <Scatter className="bg-white/10" options={options} data={data} />;
  }
  