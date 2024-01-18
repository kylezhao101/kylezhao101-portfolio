import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
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
    <section id="abt me" className="min-h-screen px-4 sm:px-20 bg-custom-background-gray">

      <div className="pt-32 pb-20 sm:pt-52 sm:pb-20 2xl:pt-60 ">
        <p className="font-space">Hello, I'm</p>
        <h1 className="font-neopixel text-8xl md:text-9xl">Kyle Zhao</h1>
      </div>

      <div className="grid grid-cols-4 gap-5 sm:grid-cols-8 md:grid-cols-8 lg:grid-cols-12 sm:gap-0">

        <div className="col-span-4 sm:col-span-3 flex items-start">
          <div className="bg-custom-blue w-3 h-3 mr-3 mt-2"></div>
          <div className='swipe'>
            <h3 className="swipe-text font-space text-xl mr-5">
              Designer + Developer
            </h3>
          </div>
        </div>

        <div className="swipe col-start-1 col-span-4 sm:col-span-4 md:col-start-5 md:col-span-4 lg:col-start-4 lg:col-span-3 font-space mr-5">
          <p className='swipe-text'>
            Studying  @ the SFU School of Interactive arts and Technology (SIAT)
          </p>
          <br></br>
          <p className="swipe-text text-custom-gray">
            Vancouver, 49.2827° N, 123.1207° W
          </p>
          <p className="swipe-text text-custom-gray">
            {formatTimeInTimeZone(currentTime, 'America/Vancouver')} (pst)
          </p>
        </div>

        <div className="pt-40 col-span-4 col-start-1 sm:pl-5 sm:col-span-8 sm:pt-10 md:col-span-8 lg:col-span-5 font-space lg:col-start-7 lg:pt-0 ">
          <div className='swipe' >
            <p className="swipe-text text-4xl leading-snug">
              An enthusiast for all things development, graphic design, and computer science related.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero; 