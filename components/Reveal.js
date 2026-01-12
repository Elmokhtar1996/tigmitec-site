'use client';
import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, className = "", delay = 0, direction = "up" }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const getDirectionClass = () => {
        switch (direction) {
            case "left": return isVisible ? "translate-x-0" : "-translate-x-20";
            case "right": return isVisible ? "translate-x-0" : "translate-x-20";
            case "down": return isVisible ? "translate-y-0" : "-translate-y-20";
            case "up":
            default: return isVisible ? "translate-y-0" : "translate-y-20";
        }
    };

    return (
        <div
            ref={ref}
            className={`${className} transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100' : 'opacity-0'
                } ${getDirectionClass()}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
