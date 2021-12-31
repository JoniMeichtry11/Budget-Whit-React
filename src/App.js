import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './config/router/home';
import CreateBudget from './config/router/create-budget';
import './styles/App.css';
import './styles/Create-budget.css';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/create-budget" element={<CreateBudget/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
