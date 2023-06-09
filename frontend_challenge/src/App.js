import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import LandingPage from './pages/LandingPage/LandingPage';
import CheckListPage from './pages/CheckListPage/CheckListPage';
import ImagePage from "./pages/ImagePage/ImagePage"
import HeadersPage from './pages/HeadersPage/HeadersPage';
import UsabilityPage from './pages/UsabilityPage/UsabilityPage';
import SignInSignOut from './pages/SignInSignOut/SignInSignOut';
import TestPage from './pages/TestPage/TestPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/landing" element={<LandingPage/>}/>
          <Route path="/checklist" element={<CheckListPage/>}/>
          <Route path="/imagePage" element={<ImagePage/>}/>
          <Route path="/semantics" element={<HeadersPage/>}/>
          <Route path="/usability" element={<UsabilityPage/>}/>
          <Route path="/SignInSignOut" element={<SignInSignOut/>}/>
          <Route path="/testpage" element={<TestPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
