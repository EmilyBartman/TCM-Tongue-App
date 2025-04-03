import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Education from './pages/Education';
import UploadPage from './pages/UploadPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="p-4 bg-green-100 text-black font-sans">
        <nav className="flex gap-4 mb-4">
          <Link to="/">Home</Link>
          <Link to="/education">TCM Education</Link>
          <Link to="/upload">Analyze Tongue</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}