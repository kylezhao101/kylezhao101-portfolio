const Skills: React.FC = () => {
  const skills = {
    frontEnd: ["HTML CSS JavaScript", "TailWindCSS", "SCSS", "jQuery", "React"],
    backEnd: ["Node", "Express", "PHP", "Flask"],
    dataBases: ["MySQL", "MongoDB", "Firebase"],
    designTools: ["Figma", "Adobe Photoshop"],
    otherLanguages: ["Python", "Java", "C / C++"]
  };

  type SkillCategory = keyof typeof skills;

  const categoryTitles: Record<SkillCategory, string> = {
    frontEnd: "Front-end",
    backEnd: "Back-end",
    dataBases: "Databases",
    designTools: "Design Tools",
    otherLanguages: "Other Languages"
  };

  return (
    <section className="min-screen px-4 pt-40 sm:pt-0 sm:px-20 bg-custom-background-gray">
      <div className="flex items-start mb-5">
        <div className="bg-custom-blue w-3 h-3 mr-3 mt-2"></div>
        <h3 className="font-space text-xl">My expertise</h3>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-5">
        <div className="text-5xl sm:text-7xl col-span-4 sm:col-span-8 font-neopixel">
          <h2>Client Side</h2>
          <h2>Server Side</h2>
          <h2>Design</h2>
        </div>
      </div>
      <div className="font-space grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-0 pt-5">
        <div className="col-start-1 row-start-1 col-span-4 sm:col-span-6 lg:col-span-4">
          <p className="mt-20">My skill set revolves around design and web development, aiming to provide impactful digital experiences.</p>
          <p className="mt-5 mb-10">I leverage a versatile tech stack, always eager to explore new technologies and expand my horizons for every project.</p>
        </div>
        <div className="row-start-2 col-span-full lg:row-start-1 lg:col-start-7 font-space flex flex-wrap flex-row leading-normal">
          {Object.entries(skills).map(([category, skillsList]) => (
            <ul key={category} className="w-1/2 pb-5">
              <li className="text-xl text-custom-gray">{categoryTitles[category as SkillCategory]}</li>
              {skillsList.map((skill, index) => (
                <li className="text-xl" key={index}>{skill}</li>
              ))}
            </ul>
          ))
          }
        </div>
      </div>
    </section>
  );
};

export default Skills;
