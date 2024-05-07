import './App.css';
import Home from './components/home/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import TourDetails from './components/TourDetails/TourDetails.js'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path={`/city/:id`} element={<TourDetails/>}></Route>
      </Routes>
    </>
  )
}
export default App;
