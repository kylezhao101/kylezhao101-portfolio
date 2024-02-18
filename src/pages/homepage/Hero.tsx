import React, { useState, useEffect } from "react";

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
    return new Intl.DateTimeFormat("en-US", {
      timeZone: timeZone,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(date);
  };

  return (
    <section className="flex h-screen flex-col justify-center bg-custom-background-gray px-4 sm:px-20">
      <div className="pb-20 pt-44 sm:pt-0">
        <p className="font-space">Hello, I'm</p>
        <h1 className="font-neopixel text-8xl md:text-9xl">Kyle Zhao</h1>
      </div>

      <div className="grid grid-cols-4 gap-5 sm:grid-cols-8 sm:gap-0 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-4 flex items-start sm:col-span-3">
          <div className="mr-3 mt-2 h-3 w-3 bg-custom-blue"></div>
          <div className="swipe">
            <h3 className="swipe-text mr-5 font-space text-xl">
              Designer + Developer
            </h3>
          </div>
        </div>

        <div className="swipe col-span-4 col-start-1 mr-5 font-space sm:col-span-4 md:col-span-4 md:col-start-5 lg:col-span-3 lg:col-start-4">
          <p className="swipe-text">
            Studying @ Simon Fraser University's School of Interactive Arts and
            Technology (SIAT)
          </p>
          <br></br>
          <p className="swipe-text text-custom-gray">
            {formatTimeInTimeZone(currentTime, "America/Vancouver")} (pst)
          </p>
        </div>

        <div className="col-span-4 col-start-1 pt-40 font-space sm:col-span-8 sm:pl-5 sm:pt-10 md:col-span-8 lg:col-span-5 lg:col-start-7 lg:pt-0 ">
          <div className="swipe">
            <p className="swipe-text text-3xl leading-snug">
              An enthusiast for all things development, graphic design, and
              computer science related.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
