// import { useState, useEffect } from 'react';

// const DataAPI = () => {
  
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // Traer datos desde la API
//     fetch('https://apidatos.ree.es/es/datos/generacion/estructura-generacion?start_date=2014-01-01&end_date=2015-12-31&time_trunc=year&geo_trunc=electric_system&geo_limit=ccaa&geo_ids=7')
//       .then(response => response.json())
//       .then(jsonData => {
//         setData(jsonData); // Se guarda en data
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const includedData = data ? data.included : [];

//   const dataValues = includedData.map(item => ({
//     datetime: item.attributes.values[0].datetime,
//     value: item.attributes.values[0].value,
//     percentage: item.attributes.values[0].percentage,
//     title: item.attributes.title,

//   }));

  
//   const datetimes = dataValues.map(item => item.datetime);
//   const values = dataValues.map(item => item.value);
//   const percentages = dataValues.map(item => item.percentage);
//   const titles = dataValues.map(item => item.title);
//   const numbers = [1, 2, 3];
//   const titles2 = ["a", "b", "c"];
//   // return {datetimes, values, percentages, titles}
//   return {dataValues}
// };

// export default DataAPI;
