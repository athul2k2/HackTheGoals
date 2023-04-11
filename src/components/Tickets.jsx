import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

function Tickets() {
    return (
        <div>

            <div className={`mt-12  bg-tertiary rounded-[20px]`}>
                <div
                    className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[100px]`}
                >
                    <motion.div variants={textVariant()}>
                        <p className={styles.sectionSubText}>Register </p>
                        <h2 className={styles.sectionHeadText}>Tickets </h2>
                    </motion.div>
                </div>

                <div className=" bg-tertiary rounded-lg min-h-[300px] pb-8">


                    <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
                        <div className="shadow p-5 rounded-lg border-t-4 border-violet-400 bg-primary ">
                            <p className="uppercase text-sm font-medium text-purple-500">
                                ticket 1
                            </p>

                            <p className="mt-4 text-3xl text-purple-300 font-medium">
                            ₹1400
                            </p>

                            <p className="mt-4 font-bold  text-purple-300">
                                IEEE Members
                            </p>

                            <div className="mt-8">
                            <ul className="grid grid-cols-1 gap-4">
                                    <li className="inline-flex items-center text-purple-600">
                                        <svg className="w-4 h-4 mr-2 fill-current text-violet-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                        </svg>

                                        Networking Opportunities
                                    </li>

                                    <li className="inline-flex items-center text-purple-600">
                                        <svg className="w-4 h-4 mr-2 fill-current text-violet-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                        </svg>

                                        Participating certificate
                                    </li>
                                    <li className="inline-flex items-center text-purple-600">
                                        <svg className="w-4 h-4 mr-2 fill-current text-violet-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                        </svg>

                                        Interesting goodies
                                    </li>

                                    <li className="inline-flex items-center text-purple-600">
                                        <svg className="w-4 h-4 mr-2 fill-current text-violet-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                        </svg>

                                        Free Food
                                    </li>
                                    <li className="inline-flex items-center text-purple-600">
                                        <svg className="w-4 h-4 mr-2 fill-current text-violet-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                        </svg>
                                        
                                        Amazing prices
                                    </li>
                                    <li className="inline-flex items-center text-purple-600">
                                        <svg className="w-4 h-4 mr-2 fill-current text-violet-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                        </svg>
                                        Activity point
                                   
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <button className="bg-violet-400 hover:bg-purple-500 px-3 py-2 rounded-lg w-full text-purple-200">
                                    Register now
                                </button>
                            </div>
                        </div>

                        <div className="shadow p-5 rounded-lg border-t-4 border-violet-400 bg-primary ">
                            <p className="uppercase text-sm font-medium text-purple-500">
                                Tickets 2
                            </p>

                            <p className="mt-4 text-3xl text-purple-300 font-medium">
                            ₹1500 <span className="text-base font-normal"></span>
                            </p>

                            <p className="mt-4 font-bold text-purple-300">
                                NON-IEEE Members
                            </p>

                            <div className="mt-8">
                                <ul className="grid grid-cols-1 gap-4">
                                    <li className="inline-flex items-center text-purple-600">
                                        <svg className="w-4 h-4 mr-2 fill-current text-violet-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                        </svg>

                                        Networking Opportunities
                                    </li>

                                    <li className="inline-flex items-center text-purple-600">
                                        <svg className="w-4 h-4 mr-2 fill-current text-violet-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                        </svg>

                                        Participating certificate
                                    </li>
                                    <li className="inline-flex items-center text-purple-600">
                                        <svg className="w-4 h-4 mr-2 fill-current text-violet-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                        </svg>

                                        Interesting goodies
                                    </li>

                                    <li className="inline-flex items-center text-purple-600">
                                        <svg className="w-4 h-4 mr-2 fill-current text-violet-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                        </svg>

                                        Free Food
                                    </li>
                                    <li className="inline-flex items-center text-purple-600">
                                        <svg className="w-4 h-4 mr-2 fill-current text-violet-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                        </svg>
                                        
                                        Amazing prices
                                    </li>
                                    <li className="inline-flex items-center text-purple-600">
                                        <svg className="w-4 h-4 mr-2 fill-current text-violet-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                        </svg>
                                        Activity point
                                   
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <button className="bg-violet-400 hover:bg-purple-500 px-3 py-2 rounded-lg w-full text-purple-200">
                                    Register now
                                </button>
                            </div>
                        </div>
                    </div>



                </div>

            </div>





        </div>
    )
}

export default SectionWrapper(Tickets, "tickets");