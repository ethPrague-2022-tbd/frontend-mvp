import React from 'react';
import Topbar from './components/Topbar';
import UserProfile from './components/UserProfile';

const App: React.FC = () => (
  <div className="bg-red-300 h-screen">
    <Topbar />
    <UserProfile />
  </div>
);

export default App;
