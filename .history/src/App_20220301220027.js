import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
   <Routes>
     <Route path='/' element={<Navigate to={'/login'} replace/> } >
        <Route path='login' element={<Login}/>
        <Route path='signup' element={}/>
     </Route>
   </Routes>
  );
}

export default App;
