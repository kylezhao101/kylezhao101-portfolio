const Skills: React.FC = () => {

  const skills = {
    frontEnd: ["HTML CSS JS", "TailWindCSS", "SCSS", "jQuery", "React"],
    backEnd: ["Node", "Express", "PHP", "Flask"],
    dataBases: ["mySQL", "mongoDB", "Firebase"],
    designTools: ["Figma", "Adobe Photoshop"],
    otherLanguages: ["Python", "Java", "C / C++"]
  };

  return (
    <section className="h-screen px-20">



      <div className="font-neopixel text-6xl">
        <h2 className="text-custom-gray ">
          01 Client Side
        </h2>
        <h2 className="text-custom-gray ">
          02 Server Side
        </h2>
        <h3 className="text-custom-gray ">
          03 Design
        </h3>
      </div>

      <div className="grid grid-cols-12 gap-5 pt-10">

        <div className="col-span-3 flex items-start pb-28">
          <div className="bg-custom-blue w-3 h-3 mr-3 mt-2"></div>
          <h3 className="font-space text-xl">My expertise</h3>
        </div>

        <div className="col-span-2 col-start-5 font-space">
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
        </div>

        <div className="col-span-2">
          <h3 className="text-xl pb-3">My design tools</h3>
          <ul>
            {skills.designTools.map((skill, index) => (
              <li key={index} >{skill}</li>
            ))}
          </ul>
        </div>

        <div className="col-span-2">
          <h3 className="text-xl pb-3">& other languages</h3>
          <ul>
            {skills.otherLanguages.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;