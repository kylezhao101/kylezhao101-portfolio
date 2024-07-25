import React, { useState, useEffect } from "react";

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
    return new Intl.DateTimeFormat("en-US", {
      timeZone: timeZone,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(date);
  };

  return (
    <section
      id="contact"
      className="bg-custom-background-gray px-4 pb-20 pt-60 sm:px-20"
    >
      <div className="grid grid-cols-4 gap-0 sm:grid-cols-8 lg:grid-cols-12">


        <div className="col-span-4 row-start-3 font-space sm:col-span-4 sm:col-start-1 md:row-start-2 lg:col-start-2">
          <div className="mb-5 w-min">
            <a
              className="hover:text-custom-blue"
              href="/Kyle-Zhao-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Resume</p>
            </a>
            <a
              className="hover:text-custom-blue"
              href="https://github.com/kylezhao101"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>GitHub</p>
            </a>
            <a
              className="hover:text-custom-blue"
              href="https://www.linkedin.com/in/kyle-zhao-397452216/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>LinkedIn</p>
            </a>
          </div>

          <div className="text-custom-gray">
            <p>Created with React</p>
            <p>@2024 Kyle Zhao</p>
          </div>
        </div>

        <div className="col-span-4 row-start-2 mb-5 font-space sm:col-span-4 sm:col-start-1 md:col-start-5 lg:col-span-3 lg:col-start-7">
          <a
            href="mailto:kzz@sfu.ca"
            className="rounded-full border-2 border-black px-4 text-xl  duration-200 ease-in-out hover:border-custom-blue hover:text-custom-blue"
          >
            kzz@sfu.ca
          </a>
          <p className="mt-5">Vancouver, Canada. Open for Fall 2024 positions. <br></br>{formatTimeInTimeZone(currentTime, "America/Vancouver")} (PST)</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
