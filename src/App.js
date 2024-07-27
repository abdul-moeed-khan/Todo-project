
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import './App.css';
import Pending from './Components/Pending';
import TodoWrapper from './Components/TodoWrapper';


function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TodoWrapper />} />
          <Route path="Pending" element={<Pending />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
      
    
    
  );
}

export default App;
