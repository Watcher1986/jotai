import { Routes, Route, Navigate } from 'react-router-dom';

import AppLayout from './layout/Layout';
import { getAppRoutes } from './helpers/getAppRoutes';
import { appRoutes } from './routes';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route path='/' element={<Navigate to='jotai/svg-dots' />} />
        {getAppRoutes(appRoutes)}
      </Route>
    </Routes>
  );
}

export default App;
