// import React from 'react'
// import { Bar } from 'react-chartjs-2';

// export const BarChart = () => {
    
//     var TempMax = [36, 34, 36, 32, 36, 40, 32, 38];
//     var TempMin = [24, 26, 25, 24, 26, 28, 23, 26];
//     var Provincias = ["Almería", "Granada", "Málaga", "Jaén", "Córdoba", "Sevilla", "Cádiz", "Huelva"];
    
//     var mydata = {
//         labels: Provincias,
//         datasets: [
//             {
//                 label: 'Maximas', // Nombre de las tarjetas
//                 data: TempMax, // Procedencia de datos
//                 backgroundColor: 'rgba(255, 140, 0, 0.5)',
//                 hoverBackgroundColor: 'rgba(255, 140, 0)',
//                 borderColor: 'rgba(255, 140, 0)',
//             },
//             {
//                 label: 'Mínimas',
//                 data: TempMin,
//                 backgroundColor: 'rgba(8, 116, 54, 0.6)',
//                 hoverBackgroundColor: 'rgba(0, 139, 139)',
//                 BorderColor: '#2F4F4F;',
//                 hoverBorderColor: '#2F4F4F;',
//             },
//         ],
//     };

//     var myoptions = {
//         MaintainAspectRatio: false,
//     }
//     return (
//       <div>
//       <h1 className="title-box"><span className="title">Temperatura media por provincia</span></h1>
//       <p className="subtitle-box"><span className="subtitle">Veranos 2000/2010</span></p>
//       <div className="chart-container">
//           <Bar data={mydata} options={myoptions}/>
//       </div>
//   </div>
//   )
// }
