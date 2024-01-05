const Hero: React.FC = () => {
  return (
    <section className="h-screen px-20">

      <div className="pt-52 pb-28">
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
          <p className="text-custom-gray">
            49.2827° N, 123.1207° W
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

      <p className="font-space text-custom-gray">
        Portfolio 2024
        kylezhao101@gmail.com
      </p>
      
    </section>
  );
};

export default Hero; 