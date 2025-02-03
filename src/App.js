
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './Auth/Signup';
 import SignIn from './Register/Signin';
import Home from './Auth/Home/Home';
import User from './Pages/User';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route exact path='/signup' element={<SignUp/>}/>
  <Route exact path='/signin' element={<SignIn/>}/>
  <Route exact path='/home' element={<Home/>}/>
  <Route exact path='/user' element={<User/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
