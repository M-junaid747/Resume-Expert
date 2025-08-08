
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Auth/Home/Home';
import User from './Pages/User';
import FileUploadPage from './Pages/FileUpload';
import SearchResume from './Pages/SearchResumePage';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Ourservices from './Pages/Ourservices';
import JobDescriptionPage from './Pages/SearchResumePage';
import Results from './Pages/MatchResultPage';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/home' element={<Home/>}/>
  <Route exact path='/job' element={<SearchResume/>}/>
  <Route exact path='/file' element={<FileUploadPage/>}/>
  <Route exact path='/jobdescription' element={<JobDescriptionPage/>}/>
  <Route exact path='/result' element={<Results/>}/>
  <Route exact path='/About' element={<About/>}/>
  <Route exact path='/ContactUs' element={<ContactUs/>}/>
  <Route exact path='/OurServices' element={<Ourservices/>}/>

</Routes>
</BrowserRouter>
</>
  );
}

export default App;
