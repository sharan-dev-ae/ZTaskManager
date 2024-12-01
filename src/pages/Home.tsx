// src/pages/Home.tsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import backgroundImage from '../assets/dark-purple-3840x2160-17330.png';

const Home = () => {
  const {theme} = useGlobalContext();
  useEffect(() => {
    console.log(theme,"HOME COMP")
  }, [theme]);
  return (
    <div className={`relative ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
    <img
      src={backgroundImage} 
      alt='Task Manager'
      className="w-full h-full object-cover"
    />
    <main className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
      <h1 className="text-4xl font-bold mb-4 text-white">
        Welcome to Task Manager
      </h1>
      <p className="text-lg mb-6 text-white">
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
