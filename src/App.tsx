import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div className="page">
      <Outlet />
    </div>
  );
};
