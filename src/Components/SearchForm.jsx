import React, { useState} from 'react';
import { Button, FormControl, Select, MenuItem, InputLabel} from '@mui/material';

  const SearchForm = () => {
    const [selectedYear, setSelectedYear] = useState('');
    const years = [2014, 2015, 2016, 2017, 2018, 2019, 2020];
    
    const handleYearChange = event => {
      setSelectedYear(event.target.value);
    };

    const handleSubmit = event => {
      event.preventDefault();

      console.log('Año seleccionado:', selectedYear);
    };
    
    return (
      <form className='form-container' onSubmit={handleSubmit}>
        <FormControl className='form-control' fullWidth margin="normal">
        <InputLabel className='form-label'>Seleccione año</InputLabel>
        <Select value={selectedYear} onChange={handleYearChange}>
          <MenuItem value="">
            <em>Seleccione...</em>
          </MenuItem>
          {years.map(year => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button style={{
          border: "1px",
          borderRadius: "5px",
          color: "#fff",
          backgroundColor: "rgba(8,116,54, 0.5)",
          fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
          cursor: "pointer",
          }} type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  );
}
  
  export default SearchForm;