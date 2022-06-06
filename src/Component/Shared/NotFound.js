import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    const backToHome =() => {
        navigate('/')
    }
    return (
        <div className="">
            <Helmet>
                <title>Page Not Found - the wareHouse</title>
            </Helmet>
      <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
          <div className="border-t border-gray-200 text-center pt-8">
            <h1 className="text-9xl font-bold text-red-700">404</h1>
            <h1 className="text-6xl font-medium py-8">Page not found</h1>
            <p className="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
            <button onClick={() =>backToHome()} className="bg-red-400 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md mr-6">
            BACK TO HOME
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default NotFound;