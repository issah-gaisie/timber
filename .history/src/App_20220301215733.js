import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <Routes>
     <Route path='/' element={<Navigate to={'/login'} replace/> } >
        <Route path='login' element={}/>
        <Route path='login' element={}/>

     </Route>
   </Routes>
  );
}

export default App;
