import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title, 
    Tooltip, 
    Legend,
    Filler
  );
  

export const BarChart = () => {
    const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://apidatos.ree.es/es/datos/generacion/estructura-generacion?start_date=2014-01-01&end_date=2015-12-31&time_trunc=year&geo_trunc=electric_system&geo_limit=ccaa&geo_ids=7')
      .then(response => response.json())
      .then(jsonData => {
        setData(jsonData); // Se guarda en data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const includedData = data ? data.included : [];


  const dataValues = includedData.map(item => ({
    // datetime: item.attributes.values[0].datetime,
    // value: item.attributes.values[0].value,
    percentage: item.attributes.values[0].percentage,
    title: item.attributes.title,

  }));

  
  //const datetimes = dataValues.map(item => item.datetime);
  //const values = dataValues.map(item => item.value);
  const percentages = dataValues.map(item => item.percentage);
  const titles = dataValues.map(item => item.title);


   // Create graph data
   const graphDataBar = {
    labels: titles,
    datasets: [
      {
        label: 'Energia Consumida en porcentages',
        data: percentages,
        fill: true,
        backgroundColor: 'rgb(255, 183, 183)',
        borderColor: 'rgb(255, 120, 120)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 120, 120, 0.8)',
      }
    ],
  };

  const myOptionsBar = {
    scales : {
      x: {
        ticks: {
          maxRotation: 60,
          minRotation: 30,
        },  
        grid: {
          display: false,
            }
      },
  },
  plugins: {
      title: {
        display: true,
        text: 'Red Electrica',
      },
      responsive: true
    },
  };
  return (
    <>
      <h1 className='chart-title'>Porcentaje de energia por tipos de energias</h1>
      <div className='chart-box'>
        <Bar data={graphDataBar} options={myOptionsBar} />
      </div>
    </>
  );
}
