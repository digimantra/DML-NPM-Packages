import PropTypes from "prop-types";

import { Line,Bar } from "react-chartjs-2"
import {Chart as ChartJS, CategoryScale, LinearScale,  BarElement,PointElement,LineElement,Title, Tooltip,Legend } from "chart.js"

ChartJS.register(
    CategoryScale, LinearScale, PointElement,LineElement,BarElement,Title, Tooltip,Legend 
)

export const Chart = ({ data, type , title}) => {
    console.log(data);

    const options = {
        responsive:true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    font: {
                        size: 12,
                    },
                    // Add padding between legend items
                    padding: 30
                }
            },
      
            title: {
              display: true,
              text: `${title}` // Your title text here
          },
        },
      
       
        scales: {
            x: {
                stacked: true, // If you want stacked bar chart, otherwise remove this line
               
           
            },
            y: {
                stacked: true, // If you want stacked bar chart, otherwise remove this line
           
               
            }
        }
      };
    return (
        <div className="md:w-3/4 md:h-96 md:mx-0 px-6 w-full h-full flex items-center justify-center chart-container">
            {type === "bar" ? (
                <Bar options={options} data={data} />
            ) : (
                <Line options={options} data={data} />
            )}
        </div>
    );
};



Chart.propTypes={
    data:PropTypes.any,
    options:PropTypes.array,
    type:PropTypes.string,
    title:PropTypes.string

}

Chart.defaultProps = {
    type: "line"
};