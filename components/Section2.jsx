"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Section2 = () => {
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [isDivVisible, setIsDivVisible] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.01, // 50% of the element visible
    });

    // Update state when element is in view
    useEffect(() => {
        if (inView) {
            setIsTextVisible(true);
            setIsDivVisible(true);
        }
    }, [inView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isDivVisible ? { opacity: 1, transition: { delay: 0.5, duration: 1, ease: 'easeIn' } } : {}}
            className="py-6 h-[100vh] bg-black z-10"
        >
            <h2>Section 2</h2>
            <motion.p
                initial={{ opacity: 0, x: 1500 }}
                animate={isTextVisible ? { opacity: 1, x:100, transition: { delay: 1.5, duration: 1, ease: 'easeIn' } } : {}}
            >
                Hello
            </motion.p>
            <motion.p
                initial={{ opacity: 0, x: 1500 }}
                animate={isTextVisible ? { opacity: 1, x:200, transition: { delay: 2, duration: 0.8, ease: 'easeIn' } } : {}}
            >
                This
            </motion.p>
            <motion.p
                initial={{ opacity: 0, x: 1500 }}
                animate={isTextVisible ? { opacity: 1, x:300, transition: { delay: 2.5, duration: 0.6, ease: 'easeIn' } } : {}}
            >
                is
            </motion.p>
            <motion.p
                initial={{ opacity: 0, x: 1500 }}
                animate={isTextVisible ? { opacity: 1, x:400, transition: { delay: 3, duration: 0.4, ease: 'easeIn' } } : {}}
            >
                Nike
            </motion.p>
        </motion.div>
    );
}

export default Section2;
