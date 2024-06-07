import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
