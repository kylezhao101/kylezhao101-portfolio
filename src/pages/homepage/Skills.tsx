const Skills: React.FC = () => {

  const skills = {
    frontEnd: ["HTML CSS JS", "TailWindCSS", "SCSS", "jQuery", "React"],
    backEnd: ["Node", "Express", "PHP", "Flask"],
    dataBases: ["mySQL", "mongoDB", "Firebase"],
    designTools: ["Figma", "Adobe Photoshop"],
    otherLanguages: ["Python", "Java", "C / C++"]
  };

  return (
    <section id="skills" className="min-screen px-4 sm:px-20 bg-custom-background-gray pt-40 ">

      <div className="lg:pt-0 grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-5">
        <div className="text-5xl sm:text-7xl col-span-4 sm:col-span-8 font-neopixel ">
          <h2>
            Client Side
          </h2>
          <h2>
            Server Side
          </h2>
          <h2>
            Design
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-0 pt-5">

        <div className=" col-start-1 row-start-1 col-span-4 sm:col-span-6 lg:col-span-4">
          <div className="flex items-start">
            <div className="bg-custom-blue w-3 h-3 mr-3 mt-2"></div>
            <h3 className="font-space text-xl">My expertise</h3>
          </div>
          <p className="font-space mt-20">My skill set revolves around design and web development, aiming to provide impactful digital experiences.</p>
          <p className="font-space mt-5 mb-10">I leverage a versatile tech stack, always eager to explore new technologies and expand my horizons for every project.</p>
        </div>

        <div className="row-start-2 col-span-2 sm:col-span-4 lg:row-start-1 lg:col-start-7 font-space">
          <ul>
            {skills.frontEnd.map((skill, index) => (
              <li key={index} className="text-xl">{skill}</li>
            ))}
          </ul>
          <br></br>
          <ul>
            {skills.backEnd.map((skill, index) => (
              <li key={index} className="text-xl">{skill}</li>
            ))}
          </ul>
        </div>

        <div className="row-start-2 col-span-2 sm:col-span-4 lg:row-start-1 lg:col-start-9 text-xl">
          <h3 className="pb-3 text-custom-gray">Data bases</h3>
          <ul>
            {skills.dataBases.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <h3 className="pb-3 text-custom-gray pt-5">& other languages</h3>
          <ul>
            {skills.otherLanguages.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="text-xl col-span-2 row-start-3 col-start-3 sm:col-span-4 sm:col-start-5 lg:row-start-1 lg:col-start-11">
          <h3 className="pb-3 text-custom-gray pt-5 lg:pt-0">My design tools</h3>
          <ul>
            {skills.designTools.map((skill, index) => (
              <li key={index} >{skill}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;