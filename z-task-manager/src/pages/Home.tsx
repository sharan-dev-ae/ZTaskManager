// src/pages/Home.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ToggleTheme from '../components/ToggleTheme';
import { useGlobalContext } from '../context/context';

const Home = () => {
  const {theme} = useGlobalContext();
  useEffect(() => {
    console.log(theme,"HOME COMP")
  }, [theme]);
  return (
    <div className={theme === 'light' ? 'bg-white' : 'bg-black'}>
      <main className="flex flex-col items-center justify-center min-h-screen  text-center p-8">
        <h1 className={`text-4xl font-bold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>Welcome to Task Manager</h1>
        <p className={`text-lg mb-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
          Manage your tasks efficiently and stay organized with our easy-to-use task management system.
        </p>
        <Link
          to="/task-manager"
          className="bg-purple-900 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Get Started
        </Link>
       
      </main>
    </div>
  );
};

export default Home;
