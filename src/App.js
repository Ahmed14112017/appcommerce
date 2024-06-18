
import './App.css';
import Home from './Home';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Checkout from './Checkout';


function App() {
  return (
    
 <div className="App">
  
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<Layout />}>
          <Route  index  element={<Home />}/>
          <Route path='Checkout' element={<Checkout />}/>
          </Route>
        </Routes>
      
    
      </BrowserRouter>
    
   
     
    </div>
  );
}

export default App;
