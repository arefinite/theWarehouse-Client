import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react'
import {  MenuIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { XIcon } from '@heroicons/react/solid';
import logo from '../../Img/warehouse-logo.png'




const Nav = () => {
    const [user] = useAuthState(auth)
    const SignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <Popover className="relative z-10 bg-white">
                <div className=" z-10 mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-b-2 border-dotted border-red-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link to="/">
                                <span className="sr-only">Workflow</span>
                                <img
                                    className="h-16 md:h-16"
                                    src={logo}
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <Popover.Group as="nav" className="hidden md:flex space-x-10">
                            
                            <Link to="/" className="text-base font-bold text-gray-700 hover:text-red-400">
                            Home
                            </Link>
                            <Link to="/inventory" className="text-base font-bold text-gray-700 hover:text-red-400">
                            Inventory
                            </Link>
                            <Link to="blogs" className="text-base font-bold text-gray-700 hover:text-red-400">
                            Blogs
                            </Link>
                           
                            <Link to="/about" className="text-base font-bold text-gray-700 hover:text-red-400">
                            About
                            </Link>
                            <Link to="/contact" className="text-base font-bold  text-gray-700 hover:text-red-400">
                            Contact Us
                            </Link>
                            <Link to="/my-items" className="text-base font-bold  text-gray-700 hover:text-red-400">
                            My Items
                            </Link>

                            
                        </Popover.Group>
                        {
                            user ? 
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            
                           
                            <button
                            onClick={SignOut}
                            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-700"
                            >
                            Log Out
                            </button>
                        </div>
                        :
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <Link to="/login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            Sign in
                            </Link>
                            <Link
                            to="/signup"
                            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-700"
                            >
                            Sign up
                            </Link>
                        </div>
                        }
                    </div>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus className=" top-0 mt-[-90px] z-10 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src={logo}
                                            alt="Workflow"
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>
                            <div className="py-6 px-5 space-y-6">
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Home
                                    </Link>
                                    <Link to="/inventory" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Inventory
                                    </Link>
                                    <Link to="/blogs" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Blogs
                                    </Link>
                                    <Link to="/my-items" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    My Items
                                    </Link>
                                    <Link to="/about" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    About
                                    </Link>
                                    
                                </div>
                                {
                                    user ? 
                                    <div>
                                        
                                        <button
                                        onClick={SignOut}
                                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-500 hover:bg-indigo-700"
                                        >
                                        Log Out
                                        </button>
                                        
                                    </div>
                                    :
                                    <div>
                                        <Link
                                        to="/signup"
                                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-500 hover:bg-indigo-700"
                                        >
                                        Sign up
                                        </Link>
                                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                                            Existing customer?{' '}
                                            <Link to="/login" className="text-indigo-500 hover:text-indigo-500">
                                                Sign in
                                            </Link>
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
                </Popover>
        </div>
    );
};

export default Nav;



