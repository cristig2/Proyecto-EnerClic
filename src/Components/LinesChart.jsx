// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler,
// } from 'chart.js';

// import DataAPI from './DataAPI';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler
// );



// const LinesChart = (data) => {

//   // const includedData = data ? data.included : [];


//   // const dataValues = includedData.map(item => ({
//   //   datetime: item.attributes.values[0].datetime,
//   //   value: item.attributes.values[0].value,
//   //   percentage: item.attributes.values[0].percentage,
//   //   title: item.attributes.title,

//   // }))

  
//   // // const datetimes = dataValues.map(item => item.datetime);
//   // const values = dataValues.map(item => item.value);
//   // // const percentages = dataValues.map(item => item.percentage);
//   // const titles = dataValues.map(item => item.title);


//    // Create graph data
//    const graphData = {
//     labels: ['Title 1', 'Title 2'], //[data.titles],
//     datasets: [
//       {
//         label: 'Energia Consumida',
//         data: [10, 20], //[data.values],
//         fill: false,
//         borderColor: 'blue',
//       }
//     ],
//   };

//   const myoptions = {
//     plugins: {
//       title: {
//         display: true,
//         text: 'Red Electrica', // Set your desired title here
//         fontSize: 16,
//       },
//       responsive: true
//     },
//   };


//   return (
//     <div>
//       <h2>Grafica de lineas</h2>
//      <Line data={graphData} options={myoptions}/>
//     </div>
//   );
// };
// export default LinesChart;
