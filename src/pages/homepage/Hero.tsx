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
    <section className="min-h-screen px-4 sm:px-20 bg-custom-background-gray pb-40">

      <div className="pt-32 pb-20 sm:pt-52 sm:pb-40 2xl:pt-60 ">
        <p className="font-space">Hello, I'm</p>
        <h1 className="font-neopixel text-8xl md:text-9xl text-custom-blue">Kyle Zhao</h1>
      </div>

      <div className="grid grid-cols-4 gap-5 sm:grid-cols-8 md:grid-cols-8 lg:grid-cols-12 sm:gap-0">
        <div className="col-span-4 sm:col-span-3 flex items-start">
          <div className="bg-custom-blue w-3 h-3 mr-3 mt-2"></div>
          <h3 className="font-space text-xl pr-5">Designer + Developer</h3>
        </div>

        <div className="col-start-1 col-span-4 sm:col-span-4 md:col-start-5 md:col-span-4 lg:col-start-4 lg:col-span-3 font-space pr-5">
          <p>
            Studying  @ the SFU School of Interactive arts and Technology
          </p>
          <br></br>
          <p className="text-custom-gray">
          {formatTimeInTimeZone(currentTime, 'America/Vancouver')} (pst)
          </p>
          <p className="text-custom-gray">
            Vancouver, 49.2827° N, 123.1207° W
          </p>
        </div>
        <div className="pt-40 col-span-4 col-start-1 sm:col-span-8 sm:pt-10 md:col-span-4 lg:col-span-5 font-space md:pt-10  lg:col-start-7 lg:pt-0 ">
          <p className="text-2xl">
            An enthusiast for all things development, graphic design, and computer science related.
          </p>
          <br></br>
          <p>
            Currently open to positions!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 