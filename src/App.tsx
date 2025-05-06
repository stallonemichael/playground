import { Routes, Route, Navigate } from 'react-router-dom';
import SerieAChampionsGrid from './pages/Champions';
import { Dashboard } from './pages/dashboard';

const App = () => {
  return (
    <div className='min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300 text-gray-800 p-2'>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/champions' element={<SerieAChampionsGrid />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
};

export default App;
