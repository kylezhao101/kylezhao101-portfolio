import React, { useState, useEffect } from 'react';

const Contact: React.FC = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Update the current time every second
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    // Function to format time in a specific time zone
    const formatTimeInTimeZone = (date: Date, timeZone: string) => {
        return new Intl.DateTimeFormat('en-US', {
            timeZone: timeZone,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        }).format(date);
    };

    return (
        <section id="contact" className="px-4 sm:px-20 pb-20 bg-custom-background-gray pt-60">

            <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-0">

                <div className='col-start-1 lg:col-start-2 col-span-8'>
                    <h2 className='font-neopixel text-5xl mb-20 sm:text-7xl md:mb-10'>Get in touch</h2>
                </div>

                <div className='row-start-3 col-span-4 sm:col-start-1 sm:col-span-4 md:row-start-2 lg:col-start-2 font-space'>
                    <div className='mb-5 w-min'>
                        <a className="hover:text-custom-blue" href="https://github.com/kylezhao101" target="_blank" rel="noopener noreferrer"><p>GitHub</p></a>
                        <a className="hover:text-custom-blue" href="https://www.linkedin.com/in/kyle-zhao-397452216/" target="_blank" rel="noopener noreferrer"><p>LinkedIn</p></a>
                        <a className="hover:text-custom-blue" href="/Kyle-Zhao-Resume.pdf" target="_blank" rel="noopener noreferrer"><p>Resume</p></a>
                    </div>

                    <div className='text-custom-gray'>
                        <p>Created with React</p>
                        <p>@2024 Kyle Zhao</p>
                    </div>
                </div>

                <div className='row-start-2 col-span-4 sm:col-start-1 sm:col-span-4 md:col-start-5 lg:col-span-3 lg:col-start-7 font-space mb-5'>
                    <a
                        href="mailto:kzz@sfu.ca"
                        className="rounded-full text-xl px-4 border-2 border-black  hover:border-custom-blue hover:text-custom-blue duration-200 ease-in-out"
                    >
                        kzz@sfu.ca
                    </a>
                    <p className="mt-5">(Open for work)</p>
                    <p className="mt-5">Vancouver, Canada</p>
                    <p>
                        {formatTimeInTimeZone(currentTime, 'America/Vancouver')} (PST)
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;