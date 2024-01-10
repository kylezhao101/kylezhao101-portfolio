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

                <div className='row-start-3 col-span-4 sm:col-start-1 sm:col-span-4 md:row-start-2 lg:col-start-2  font-space'>
                    <div className='mb-5'><p className='text-xl'>Find me on</p>

                        <p><a href="https://github.com/kylezhao101" target="_blank" rel="noopener noreferrer">GitHub</a></p>

                        <p><a href="temp" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                        <br></br>
                        <p className=''><a href="/resume-temp.pdf" target="_blank" rel="noopener noreferrer">Resume</a></p>
                    </div>

                    <div className='text-custom-gray'>
                        <p>Created with React</p>
                        <p>@2024 Kyle Zhao</p>
                    </div>
                </div>

                <div className='row-start-2 col-span-4 sm:col-start-1 sm:col-span-4 md:col-start-5 lg:col-span-3 lg:col-start-7 font-space mb-5'>
                    <a
                        href="mailto:kylezhao101@gmail.com"
                        className="rounded-full text-xl px-4 border-2 border-black  hover:border-custom-blue hover:text-custom-blue"
                    >
                        kylezhao101@gmail.com
                    </a>
                    <p className="mt-5">Open for work</p>
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