

import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import HomePage from './components/HomePge/HomePage';
import Login from './components/Login/Login';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/Home' element={<HomePage />}></Route>
        </Routes>

      </BrowserRouter>
  );
}

export default App;
