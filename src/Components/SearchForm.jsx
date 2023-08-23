import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const SearchForm = () => {
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
    datetime: item.attributes.values[0].datetime,
    value: item.attributes.values[0].value,
    percentage: item.attributes.values[0].percentage,
    title: item.attributes.title,

  }));

  
  const datetimes = dataValues.map(item => item.datetime);
  const values = dataValues.map(item => item.value);
  const percentages = dataValues.map(item => item.percentage);
  const titles = dataValues.map(item => item.title);


   // Create graph data
   const graphDataConfig = {
    labels: titles,
    datasets: [
      {
        label: 'Energia Consumida',
        data: values,
        fill: false,
        borderColor: 'blue',
      }
    ],
  };

  const myoptions = {
    plugins: {
      title: {
        display: true,
        text: 'Red Electrica', // Set your desired title here
        fontSize: 16,
      },
      responsive: true
    },
  };
  return (
    <div className="App">
      <h1>REData API</h1>
      <div> 
        {/* El JSON.stringify convierte el json a string para imprimir lo que le pasemos */}
      {/* {JSON.stringify(values, null, 2)}  */}
      <Line data={graphDataConfig} options={myoptions} />

      </div>
      {data ? (
        <pre>
            {/* {JSON.stringify(data, null, 2)} */}
            </pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
