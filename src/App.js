import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import { useSelector } from 'react-redux'
import NewReception from './components/doctor/NewReception';
import AllReceptions from './components/doctor/AllReceptions';
import Appointments from './components/doctor/Appointments';
import NewPatient from './components/reception/NewPatient';
import PatientDetails from './components/reception/PatientDetails';
function App() {

  const user = useSelector(state => state.authInfo.value)
  return <>
    <Header />
    <Menu />

    <Routes>
      {user.isLogin ?
        <>
          <Route path='/newReception' element={<NewReception />}></Route>
          <Route path='/allReceptions' element={<AllReceptions />}></Route>
          <Route path='/appointments' element={<Appointments />}></Route>

          <Route path='/newPatient' element={<NewPatient />}></Route>
          <Route path='/allPatients' element={<PatientDetails />}></Route>
        </> :
        <><Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route></>}


    </Routes>

    <Footer />
  </>
}

export default App;
