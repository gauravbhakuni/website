"use client";
import { useEffect, useRef } from 'react';

const Section1 = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                // Auto-play was prevented, or the video playback was interrupted
                console.error('Video playback prevented:', error.message);
            });
        }
    }, []);

    return (
        <section className='relative h-[50vh] md:h-[70vh] z-[-20]'>
            <div className="absolute z-10 inset-0 flex flex-col justify-center items-center text-center">
                <h1 className='text-black text-4xl sm:text-6xl font-extrabold'>hello my name is NIKE</h1>
            </div>

            {/* Video container */}
            <div className="relative h-full">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    className="object-cover w-full h-full"
                >
                    <source src="/assets/videos/nike-bg-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    )
}

export default Section1;
