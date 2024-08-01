import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const RevealOnScroll = ({ children }) => {
    const controls = useAnimation();
    const [ref, setRef] = useState(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (ref) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    setInView(entry.isIntersecting);
                },
                {
                    threshold: 0.1
                }
            );

            observer.observe(ref);

            return () => {
                if (ref) {
                    observer.unobserve(ref);
                }
            };
        }
    }, [ref]);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            ref={setRef}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.div>
    );
};

export default RevealOnScroll;
