import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import LandingPage from './Pages/LandingPage/LandingPage';
import TestPage from './Pages/LandingPage/TestPage/TestPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/landing" element={<LandingPage/>}/>
          <Route path="/testPage" element={<TestPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
