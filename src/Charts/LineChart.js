import React from "react";
import { Line } from "react-chartjs-2";
import {selectOptions} from "@testing-library/user-event/dist/select-options";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";




Chart.register(CategoryScale);






function LineChart({chartData}) {
    return (
        <div >
            <h2 style={{textAlign:"center"}}> Closing value </h2>
        <Line data={chartData}
              options={{
                plugins:{
                    title: {
                    display: true,
                    text: "Stock value of last 30days"},
                    legend:{
                        display: false
                    }
                }
              }
              }
              />
        </div>
    );
}


export default LineChart





/*
import { Line } from "react-chartjs-2";
import axios from "axios";
import { useState } from "react";

function getDate(daysAgo) {
    let date = new Date();
    date.setDate(date.getDate() - daysAgo);
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
}

const Chart = () => {
    const [data, setData] = useState(null);

    const handleChange = async (selectedOption) => {
        const response = await axios.get(
            `https://api.polygon.io/v2/aggs/ticker/${selectedOption.value}/range/1/day/${getDate(
                30
            )}/${getDate(0)}?adjusted=true&sort=asc&limit=120&apiKey=EbH7m3m1bUzT6Mbb40YMiGU1rxhYl04T`
        );
        const dataDays = response.data.results.map((item) => item.t.substring(0, 10));
        const dataPrices = response.data.results.map((item) => item.c);
        setData({ labels: dataDays, datasets: [{ label: selectedOption.value, data: dataPrices }] });
    };

    return (
        <div>
            <select onChange={(e) => handleChange(e.target)}>
                <option value="AAPL">AAPL</option>
                <option value="GOOGL">GOOGL</option>
                <option value="MSFT">MSFT</option>
            </select>
            {data && (
                <Line
                    data={data}
                    options={{
                        title: {
                            display: true,
                            text: `${data.datasets[0].label} Stock Price`,
                            fontSize: 20,
                        },
                        legend: {
                            display: false,
                        },
                    }}
                />
            )}
        </div>
    );
};

export default LineChart;

------------------------------------------------CHART
const data = {
    labels: labelsDays,
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45, 60, 100, 200],
        },
    ],
};
const LineChart = () => {
    return (
        <div className="">
            <Line data={data} />
        </div>
    );
};
*/
