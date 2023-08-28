// import React from 'react';

// const DataTable = ({ jsonData }) => {
//   return (
//     <div className="table-container">
//       <h2>Tabla de Datos</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Datetime</th>
//             <th>Type</th>
//             <th>Value</th>
//           </tr>
//         </thead>
//         <tbody>
//           {jsonData.included.map((entry, index) => (
//             <tr key={index}>
//               <td>
//                 {entry.attributes.values.map((valueEntry, valueIndex) => (
//                   <div key={valueIndex}>{valueEntry.datetime}</div>
//                 ))}
//               </td>
//               <td>{entry.attributes.title}</td>
//               <td>
//                 {entry.attributes.values.map((valueEntry, valueIndex) => (
//                   <div key={valueIndex}>{valueEntry.value}</div>
//                 ))}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DataTable;
