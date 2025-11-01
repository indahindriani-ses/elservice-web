import { Routes, Route } from 'react-router-dom';
import OperatorPage from './pages/admin/OperatorPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin/operators" element={<OperatorPage />} />
    </Routes>
  );
}
