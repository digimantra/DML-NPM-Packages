import PropTypes from "prop-types";

import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Chart = ({ data, type, title }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          font: {
            size: 12,
          },
          // Add padding between legend items
          padding: 30,
        },
      },

      title: {
        display: true,
        text: `${title}`, // Your title text here
      },
    },

    scales: {
      x: {
        stacked: true, // If you want stacked bar chart, otherwise remove this line
      },
      y: {
        stacked: true, // If you want stacked bar chart, otherwise remove this line
      },
    },
  };

  return (
    <div className="md:w-2/3 md:h-full md:mx-0 px-6">
      {type === "bar" ? (
        <Bar options={options} data={data} />
      ) : (
        <Line options={options} data={data} />
      )}
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.any,
  options: PropTypes.array,
  type: PropTypes.string,
  title: PropTypes.string,
};

Chart.defaultProps = {
  type: "line",
};
