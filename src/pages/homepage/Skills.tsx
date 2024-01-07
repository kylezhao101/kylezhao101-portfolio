const Skills: React.FC = () => {

  const skills = {
    frontEnd: ["HTML CSS JS", "TailWindCSS", "SCSS", "jQuery", "React"],
    backEnd: ["Node", "Express", "PHP", "Flask"],
    dataBases: ["mySQL", "mongoDB", "Firebase"],
    designTools: ["Figma", "Adobe Photoshop"],
    otherLanguages: ["Python", "Java", "C / C++"]
  };

  return (
    <section className="h-screen pt-28 px-20 bg-custom-background-gray">

      <div className="grid grid-cols-12 gap-5">
        <div className="text-custom-gray">
          <h2 className="font-neopixel text-7xl">
            01
          </h2>
          <h2 className="font-neopixel text-7xl">
            02
          </h2>
          <h2 className="font-neopixel text-7xl">
            03
          </h2>
        </div>
        <div className="col-span-4 font-neopixel text-7xl">
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

      <div className="grid grid-cols-12 gap-5 pt-10">
        <div className=" col-start-1 col-span-4">
          <div className="flex items-start">
            <div className="bg-custom-blue w-3 h-3 mr-3 mt-2"></div>
            <h3 className="font-space text-xl">My expertise</h3>
          </div>
          <p className="font-space mt-20">My skill set revolves around design and web development, aiming to provide impactful digital experiences.</p>
          <p className="font-space mt-5">I leverage a versatile tech stack, always eager to explore new technologies and expand my horizons for every project.</p>
        </div>

        <div className="col-span-2 col-start-6 font-space">
          <ul>
            {skills.frontEnd.map((skill, index) => (
              <li key={index} className="text-2xl">{skill}</li>
            ))}
          </ul>
          <br></br>
          <ul>
            {skills.backEnd.map((skill, index) => (
              <li key={index} className="text-2xl">{skill}</li>
            ))}
          </ul>
        </div>

        <div className="col-span-2">
          <h3 className="text-xl pb-3">Data bases</h3>
          <ul>
            {skills.dataBases.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <br></br>
          <h3 className="text-xl pb-3">& other languages</h3>
          <ul>
            {skills.otherLanguages.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="col-span-2">
          <h3 className="text-xl pb-3">My design tools</h3>
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