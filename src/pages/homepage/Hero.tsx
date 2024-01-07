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
    <section className="h-screen px-20 bg-custom-background-gray">

      <div className="pt-72 pb-48">
        <p className="font-space">Hello, I'm</p>
        <h1 className="font-neopixel text-9xl text-custom-blue">Kyle Zhao</h1>
      </div>

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3 flex items-start">
          <div className="bg-custom-blue w-3 h-3 mr-3 mt-2"></div>
          <h3 className="font-space text-xl">Designer + Developer</h3>
        </div>

        <div className="col-span-3 font-space">
          <p>
            Studying  @ the SFU School of Interactive arts and Technology
          </p>
          <br></br>
          <p className="text-custom-gray">
            Vancouver, 49.2827° N, 123.1207° W
          </p>
          <p className="text-custom-blue">
          {formatTimeInTimeZone(currentTime, 'America/Vancouver')} (pst)
          </p>
        </div>
        <div className="col-span-4 font-space ">
          <p className="text-2xl">
            An enthusiast for development, graphic design, and computer science.
          </p>
          <br></br>
          <p>
            Currently seeking web developer positions!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 