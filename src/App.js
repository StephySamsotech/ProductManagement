import logo from './logo.svg';
import Login from './components/Login';
import ProductListing from './components/ProductListing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');

  return (
    <div>
      {isLoggedIn ? <ProductListing /> : <Login />}

      <BrowserRouter>
   <Routes>
     <Route path='/' element= {isLoggedIn ? <ProductListing /> : <Login />}></Route>
     <Route path='/login' element={<Login />} />
   </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
