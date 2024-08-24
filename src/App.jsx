import { useState, lazy, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './assets/css/Main.css'
import './assets/css/Responsive.css'



       


const Home = lazy(() => import('./Pages/Home.jsx'));
const PPGiftsOFProphecy = lazy(() => import('./Pages/PPGiftsOFProphecy.jsx'));
const PPAbout = lazy(() => import('./Pages/PPAbout.jsx'));
const Signup = lazy(() => import('./Pages/Signup.jsx'));
const Otp = lazy(() => import('./Pages/Otp.jsx'));
const VerifyOtp = lazy(() => import('./Pages/VerifyOtp.jsx'));
const Resetpassword = lazy(() => import('./Pages/Resetpassword.jsx'));
const Login = lazy(() => import('./Pages/Login.jsx'));
const Reset = lazy(() => import('./Pages/Reset.jsx'));
const Services = lazy(() => import('./Pages/Services.jsx'));
const EthicalSandards = lazy(() => import('./Pages/EthicalSandards.jsx'));
const FoodAid = lazy(() => import('./Pages/FoodAid.jsx'));
const PPConsultation = lazy(() => import('./Pages/PPConsultation.jsx'));


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Trainer */}
          <Route index element={<Home />} />   
          <Route path="/PP-Gifts-OF-Prophecy" element={<PPGiftsOFProphecy />} />
          <Route path="/PP-about" element={<PPAbout />} />


          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Otp" element={<Otp />} />
          <Route path="/VerifyOtp" element={<VerifyOtp />} />
          <Route path="/Resetpassword" element={<Resetpassword />} />
          <Route path="/Reset" element={<Reset />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ethical-sandards" element={<EthicalSandards />} />
          <Route path="/food-aid" element={<FoodAid />} />
          <Route path="/PP-consultation" element={<PPConsultation />} />


        </Routes>
      </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App
