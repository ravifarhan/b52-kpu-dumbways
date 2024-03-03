import {Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import Detail from "./pages/detail"
import Voting from "./pages/voting"
import Dashboard from "./pages/dashboard"
import Paslon from "./pages/dashboard/paslon"
import AddPaslon from "./pages/dashboard/paslon/add"
import Partai from "./pages/dashboard/partai"
import AddPartai from "./pages/dashboard/partai/add"
import Login from "./pages/login"
import Register from "./pages/register"

function App() {

  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>}/> 
      <Route path="/register" element={<Register/>}/> 

      <Route path="/" element={<Home/>}/> 
      <Route path="/detail" element={<Detail/>}/> 
      <Route path="/voting" element={<Voting/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/> 
      <Route path="/dashboard/paslon" element={<Paslon/>}/> 
      <Route path="/dashboard/add-paslon" element={<AddPaslon/>}/> 
      <Route path="/dashboard/partai" element={<Partai/>}/> 
      <Route path="/dashboard/add-partai" element={<AddPartai/>}/> 

    </Routes>
    </>
  )
}

export default App
