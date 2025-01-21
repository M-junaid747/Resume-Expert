
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './Auth/Signup';
// import SignIn from './Auth/SignIn';
import Home from './Auth/Home/Home';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route exact path='/signup' element={<SignUp/>}/>
  {/* <Route exact path='/signin' element={<SignIn/>}/> */}
  <Route exact path='/home' element={<Home/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
