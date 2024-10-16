"use client";
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface IconBlockProps {
    title: string;
    content: string;
}

const AboutUs: React.FC = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensure the animation triggers only once
        threshold: 0.1, // Trigger when 10% of the section is visible
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 2.8,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className="max-w-screen-2xl bg-black mx-auto px-4 py-6 md:px-8 md:py-10 mb-8"
            initial="hidden"
            animate={controls}
            variants={sectionVariants}
        >
            <motion.div className="group aspect-w-16 aspect-h-9 relative overflow-hidden">
                <motion.img
                    className="w-full object-cover rounded-xl lg:rounded-xl transition-transform transform group-hover:scale-105"
                    src="img/About-Banner.jpg"
                    alt="IEEE SRM Student Branch"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                />
            </motion.div>
            <motion.div
                className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12"
                initial="hidden"
                animate={controls}
                variants={sectionVariants}
            >
                <div className="lg:col-span-1">
                    <h2 className="mb-4 md:mb-6 font-sans font-bold text-white text-xl sm:text-2xl">
                        Discover IEEE SRMIST Student Branch
                    </h2>
                    <h4 className="max-w-screen-sm mx-auto font-sans font-base text-neutral-400 text-sm">
                        IEEE SRM Student Branch is a dynamic community dedicated to fostering technological innovation and excellence. As a proud chapter of the world's largest professional organization, IEEE, we strive to inspire, educate, and empower our members.
                    </h4>
                </div>
                <motion.div className="lg:col-span-2 grid sm:grid-cols-2 gap-8 md:gap-12">
                    <IconBlock
                        title="Our Founding"
                        content="IEEE SRMIST SB was established in 2015 with a vision to inspire, educate, and empower the next generation of engineers and innovators."
                    />
                    <IconBlock
                        title="Our Values"
                        content="We are driven by innovation, education, community, and excellence. These values guide our actions and initiatives."
                    />
                    <IconBlock
                        title="Our Journey"
                        content="Over the years, we've organized impactful events, workshops, and initiatives, fostering talent and technological advancement."
                    />
                    <IconBlock
                        title="Membership Benefits"
                        content="Joining IEEE opens doors to a world of resources, networking, and professional development opportunities."
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const IconBlock: React.FC<IconBlockProps> = ({ title, content }) => {
    return (
        <motion.div
            className="flex gap-x-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1.6 } }}
        >
            <div className="grow">
                <h3 className="text-xl font-sans font-bold cursor-auto text-white">
                    {title}
                </h3>
                <p className="mt-1 mx-auto font-sans font-base text-neutral-400 text-sm">
                    {content}
                </p>
            </div>
        </motion.div>
    );
};

export default AboutUs;