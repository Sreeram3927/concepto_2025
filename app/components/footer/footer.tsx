"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Socials from './socials';

const Footer = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <footer className="max-w-screen-2xl bg-black mx-auto px-4 py-6 md:px-8 md:py-10">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 1 }}
                className="text-center flex flex-col md:flex-row gap-2 items-center justify-between"
            >
                
                <motion.div 
                    className="flex items-center justify-between"
                    whileTap={{ scale: 0.9 }}
                    whileHover={{
                        scale: 1.2,
                        transition: {
                            duration: 0.25,
                            ease: "easeInOut"
                        }
                    }}
                >
                    <a 
                        href="/" 
                        className="inline-flex items-center font-godfather text-4xl tracking-mid"
                        style={{
                            background: 'linear-gradient(to right, #CA0F24, #FDDC4F)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',  // Ensures text is clipped to gradient
                            transition: 'background 0.75s ease'
                        }}
                        aria-label="logo"
                    >
                        Concepto'25
                    </a>
                </motion.div>


                
                <div className='flex flex-col items-center gap-1.5'>
                    <a href='https://www.ieeesrmist.com/' target='_blank'>
                        <motion.img
                            src="/assets/Logo/IEEE-Logo.svg"
                            className="flex items-center justify-between h-16"
                            whileHover={{
                                scale: 1.2,
                                transition: {
                                    duration: 0.5,
                                    ease: "easeInOut"
                                }
                            }}
                            whileTap={{ scale: 0.9 }}
                        />
                    </a>

                    <div className="mt-3">
                        <p className="mb-2 font-sans font-base text-white text-normal sm:text-lg">
                            We're part of the{' '}
                            <a
                                className="font-sans font-bold text-normal text-cyan-500 sm:text-lg hover:text-yellow"
                                href="https://www.ieee.org/"
                            >
                                IEEE
                            </a>{' '}
                            family.
                        </p>
                        <p className="font-sans font-base text-white text-xs sm:text-normal">© 2025 IEEE SRM. All rights reserved.</p>
                    </div>
                </div>

                <Socials />

            </motion.div>
        </footer>
    );
};

export default Footer;