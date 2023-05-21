import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import LandingPage from './pages/LandingPage/LandingPage';
import TestPage from './pages/TestPage/TestPage';
import ImagePage from "./pages/ImagePage/ImagePage"
import HeadersPage from './pages/HeadersPage/HeadersPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/landing" element={<LandingPage/>}/>
          <Route path="/testPage" element={<TestPage/>}/>
          <Route path="/imagePage" element={<ImagePage/>}/>
          <Route path="/semantics" element={<HeadersPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
