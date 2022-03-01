import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <Routes>
     <Route path='/' element={<Navigate to={'/login'} replace/> } >
        <Route p
     </Route>
   </Routes>
  );
}

export default App;
