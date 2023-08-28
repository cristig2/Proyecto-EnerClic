import React from 'react'
import { LinesChart } from '../Components/LinesChart'
import { BarChart } from '../Components/BarChart'
import DataForm from '../Components/SearchForm'

export const DashboardPage = () => {
  return (
  <div>
    <br />
    <DataForm />
    <br /><br />
    <LinesChart />
    <br /><br />
    <BarChart />
  </div>)
}
