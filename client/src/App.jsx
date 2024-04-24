import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Ticket from "./pages/Ticket";
import Login from "./pages/Login";


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>

      <Route path="/profile" element={<Profile></Profile>}></Route>
      <Route path="/ticket/:id" element={<Ticket></Ticket>}></Route>


       
    </Routes>
    </>
  )
}

export default App
