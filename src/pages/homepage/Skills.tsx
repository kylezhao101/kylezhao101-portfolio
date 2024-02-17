const Skills: React.FC = () => {
  const skills = {
    frontEnd: ["HTML CSS JavaScript", "TailWindCSS", "SCSS", "jQuery", "React"],
    backEnd: ["Node", "Express", "PHP", "Flask"],
    dataBases: ["MySQL", "MongoDB", "Firebase"],
    designTools: ["Figma", "Adobe Photoshop"],
    otherLanguages: ["Python", "Java", "C / C++"],
  };

  type SkillCategory = keyof typeof skills;

  const categoryTitles: Record<SkillCategory, string> = {
    frontEnd: "Front-end",
    backEnd: "Back-end",
    dataBases: "Databases",
    designTools: "Design Tools",
    otherLanguages: "Other Languages",
  };

  return (
    <section className="min-screen bg-custom-background-gray px-4 pt-40 sm:px-20 sm:pt-0">
      <div className="mb-5 flex items-start">
        <div className="mr-3 mt-2 h-3 w-3 bg-custom-blue"></div>
        <h3 className="font-space text-xl">My expertise</h3>
      </div>
      <div className="grid grid-cols-4 gap-5 sm:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-4 font-neopixel text-5xl sm:col-span-8 sm:text-7xl">
          <h2>Client Side</h2>
          <h2>Server Side</h2>
          <h2>Design</h2>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-0 pt-5 font-space sm:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-4 col-start-1 row-start-1 sm:col-span-6 lg:col-span-4">
          <p className="mt-20">
            My skill set revolves around design and web development, aiming to
            provide impactful digital experiences.
          </p>
          <p className="mb-10 mt-5">
            I leverage a versatile tech stack, always eager to explore new
            technologies and expand my horizons for every project.
          </p>
        </div>
        <div className="col-span-full row-start-2 flex flex-row flex-wrap font-space leading-normal lg:col-start-7 lg:row-start-1">
          {Object.entries(skills).map(([category, skillsList]) => (
            <ul key={category} className="w-1/2 pb-5">
              <li className="text-xl text-custom-gray">
                {categoryTitles[category as SkillCategory]}
              </li>
              {skillsList.map((skill, index) => (
                <li className="text-xl" key={index}>
                  {skill}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
