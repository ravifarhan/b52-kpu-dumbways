import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom"
import { useState, ChangeEvent, useEffect } from "react"
import AuthDataType from "./interface/auth"
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
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState<Boolean>(false)
  const [isLoginDashboard, setIsLoginDashboard] = useState<Boolean>(false)
  const [form, setForm] = useState<AuthDataType>({
    username: "",
    password: ""
  })

  const handleSetForm = (event: ChangeEvent<HTMLInputElement>): void => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (form.username === "admin" && form.password === "admin") {
      setIsLoginDashboard(true)
    } else if (form.username !== "" && form.password !== "" && form.username !== "admin" && form.password !== "admin") {
      setIsLogin(true)
    }
  }

  useEffect(() => {
    if (isLogin) {
      navigate("/")
    } else if(isLoginDashboard) {
      navigate("/dashboard")  
    }
  }, [isLogin, isLoginDashboard])

  function PrivateRouteDashboard() {
    if (isLoginDashboard) {
      return <Outlet />
    } else {
      return <Navigate to="/login" />
    }
  }
  
  function PrivateRoute() {
    if (isLogin) {
      return <Outlet />
    } else {
      return <Navigate to="/login" />
    }
  }


  return (
    <>
    <Routes>
      <Route path="/login" element={<Login handle={handleSetForm} login={login} />}/> 
      <Route path="/register" element={<Register/>}/> 

      <Route path="/" element={<PrivateRouteDashboard />}>
            <Route path="dashboard/" element={<Dashboard />} />
      </Route>

      <Route path="/" element={<PrivateRoute />}>
        <Route index element={<Home />} />
      </Route>

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
