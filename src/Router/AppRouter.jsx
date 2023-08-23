import { Route, Routes } from "react-router-dom"
import { Navbar } from "../Components/NavBar"
import { DashboardPage } from "../Pages/DashboardPage"
import { HomePage } from "../Pages/HomePage"
import { LoginPage } from "../Pages/LoginPage"

export const AppRouter = () => {
  return <>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  </>
}