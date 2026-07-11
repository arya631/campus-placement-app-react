import './App.css';
import AddRegistrations from './components/AddRegistrations';
import SearchRegistration from './components/SearchRegistration';
import DeleteRegistration from './components/DeleteRegistration';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddRegistrations />} />
        <Route path="/search" element={<SearchRegistration />} />
        <Route path="/delete" element={<DeleteRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;