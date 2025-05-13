import React, { useEffect } from 'react';
import confetti from 'canvas-confetti/dist/confetti.module.mjs'; // ✅ Correct import
import { useNavigate } from 'react-router-dom';
import './ProtectedPage.css';
 
const ProtectedPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Trigger only once per session
        const hasCelebrated = sessionStorage.getItem('hasCelebrated');
        if (!hasCelebrated) {
            const duration = 2000; // 2 sec max
            const animationEnd = Date.now() + duration;

            // 🎉 Side cannons
            const fireCannons = () => {
                confetti({
                    particleCount: 80,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0, y: 1 },
                    colors: ['#FF4C60', '#4CD7FF', '#FFD93D', '#4CFF81'],
                    shapes: ['square'],
                });
                confetti({
                    particleCount: 80,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1, y: 1 },
                    colors: ['#FF4C60', '#4CD7FF', '#FFD93D', '#4CFF81'],
                    shapes: ['square'],
                });
            };

            // 🎇 Bottom firecracker
            const fireFirecracker = () => {
                confetti({
                    particleCount: 100,
                    spread: 360,
                    startVelocity: 50,
                    origin: { y: 0 },
                    colors: ['#FF4C60', '#4CD7FF', '#FFD93D', '#4CFF81'],
                    shapes: ['square'],
                });
            };

            // Fire once on load
            fireCannons();
            fireFirecracker();

            // Optional: fire again after 1 second (if within 2s)
            const timeout = setTimeout(() => {
                if (Date.now() < animationEnd) {
                    fireCannons();
                }
            }, 1000);

            // Save celebration flag
            sessionStorage.setItem('hasCelebrated', 'true');

            return () => clearTimeout(timeout);
        }
    }, []);

    return (
        <div className="premium">
            <div className="premium-content">
                <i className="fa-solid fa-crown fa-bounce premium-icon"></i>
                <h1 className='premium-txt-title'>Welcome to Premium 🎉</h1>
                <p className='premium-txt'>Enjoy unlimited, ad-free streaming with exclusive movies, series, and more.</p>
            </div>
        </div>
    );
};

export default ProtectedPage;
