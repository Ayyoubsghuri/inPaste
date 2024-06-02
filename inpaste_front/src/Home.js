import React, { Fragment, useState } from 'react'
import LOGO from "./images/logo.png";
import { Link } from 'react-router-dom';
import './Home.css';
import { ReactTyped } from 'react-typed';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Contact from './contact';
import Footer from './footer/footer'
import PastePage from './pastepage';



// import Login from '../authPage/Login';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
    height:"80%",
    overflowY: "auto",
    borderRadius: 5,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 0,
};
const style2 = {
    width: 300,
};
function Home() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => { setOpen(true); }
    const handleClose = () => setOpen(false);
    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <PastePage />
                    </Box>
                </Fade>
            </Modal>
            <section>
                <section className="" >
                    <div className=" bg-grey-600 ">
                        <nav className="flex justify-around">
                            <div className="flex flex-wrap justify-around items-center w-full">
                            <img className="size-[4.6rem] w-auto invert" src={LOGO} alt="logo" />
                            </div>
                        </nav>
                    </div>
                </section>
                
            </section>
            <section className="px-2 py-12 bg-white md:px-0">
                <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-center sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-3">
                        
                            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                <h1 className="text-4xl tracking-tight text-gray-900 sm:text-3xl md:text-2xl lg:text-3xl xl:text-5xl">
                                    <span className="block xl:inline">Best Paste Tool To </span>
                                    <span className="block text-gray-900 xl:inline ">Share Anonymously!</span>
                                </h1>
                                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-2xl">Join our Api Service and tell your story, We do the business for you. Just ENJOY.</p>
                                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                                    <button onClick={handleOpen} className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-gray-700 sm:mb-0 hover:bg-gray-900 sm:w-auto rounded-xl">
                                        Try it Now!
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </button>

                                    {<Link to="/documentation" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 hover:bg-gray-200 hover:text-gray-600 rounded-xl">
                                        Learn More
                                    </Link>}

                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="w-full h-auto overflow-hidden shadow-xl rounded-xl">
                                <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="feauture" className="py-10 md:px-0 bg-gray-50">
                <div className=" max-w-6xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
                    <div className="flex flex-wrap items-center">
                        <div className="order-1 w-full lg:w-full lg:order-0">
                            <div className="w-full ">
                                <h2 className="mb-4 text-5xl tracking-tight sm:text-4xl ">Jam-packed with all the tools you need to succeed!</h2>
                                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">It's never been easier to build a business of your own. Our tools will help you with the following:</p>
                                <ul>
                                    <li className="flex items-center py-2 space-x-4 xl:py-3">
                                        <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                                        <span className="font-medium text-gray-500">Faster Processing and share in no time.</span>
                                    </li>
                                    <li className="flex items-center py-2 space-x-4 xl:py-3">
                                        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                                        <span className="font-medium text-gray-500">No more tracking.</span>
                                    </li>
                                    <li className="flex items-center py-2 space-x-4 xl:py-3">
                                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                        <span className="font-medium text-gray-500">100% Protection and Security for Your Paste Data.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
            <section className=" leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24">
                <div className="max-w-6xl  px-10 mx-auto border-solid lg:px-12">
                    <div className="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
                        <div className="box-border flex-1 text-center border-solid sm:text-left">
                            <h2 className="m-0 text-4xl font-semibold leading-tight tracking-tight text-left text-black border-0 border-gray-200 sm:text-5xl">
                                Boost Your Productivity
                            </h2>
                            <p className="mt-2 text-xl text-left text-gray-900 border-0 border-gray-200 sm:text-2xl">
                                Our service will help you maximize and boost your productivity.
                            </p>
                        </div>
                        {<Link to="/login" className="inline-flex items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-sans text-base leading-none text-white no-underline bg-gray-700 border border-solid cursor-pointer md:w-auto lg:mt-0 hover:bg-gray-900 hover:border-gray-900 hover:text-white focus-within:bg-gray-800 focus-within:border-gray-800 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl rounded-lg">
                            Get Started
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </Link>}
                    </div>
                </div>
            </section>
            <Footer/>
            
        </>
    )
}

export default Home;