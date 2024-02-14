import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import projectsData from "../../projectsData";
import ProjectNav from "../../components/ProjectNav";
import ProjectPageHeader from "../../components/ProjectPageHeader";

import crown from "../../assets/images/sfuea/crown.webp";
import ktruue from "../../assets/images/sfuea/KTRUUE.webp";
import s1ay3rr from "../../assets/images/sfuea/s1ay3rr.webp";
import yuzu from "../../assets/images/sfuea/yuzu.webp";
import ottoisgun from "../../assets/images/sfuea/ottoisgun.webp";
import happyheart from "../../assets/images/sfuea/happyheart.webp";
import lunr from "../../assets/images/sfuea/lunr.webp";
import colingogo from "../../assets/images/sfuea/colingogo.webp";
import mai from "../../assets/images/sfuea/mai.webp";
import angelspell from "../../assets/images/sfuea/angelspell.webp";

const SFUEA: React.FC = () => {
  //brings to top of page
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Find the project with the title 'SFU Esports Association'
  const sfueaProject = projectsData.find(
    (project) => project.title === "SFU Esports Association",
  );
  if (!sfueaProject) {
    return <div>No SFU Esports Association project found</div>;
  }

  const imageSources = [
    crown,
    ktruue,
    s1ay3rr,
    yuzu,
    ottoisgun,
    happyheart,
    lunr,
    colingogo,
    mai,
    angelspell,
  ];

  return (
    <section className="bg-custom-background-gray font-space">
      <ProjectPageHeader project={sfueaProject} />

      <section className="grid grid-cols-12 px-4 lg:px-20">
        <div className="col-span-12 row-start-3 my-32 md:col-span-7 md:mt-10 xl:col-span-5">
          <p>
            As a club executive of design, I aim to fulfill requests of club
            coordinators and competitive team players to the best of my
            abilities and to (hopefully) contribute to the greater SFU gaming
            community.
          </p>
        </div>
      </section>

      <section className="b-section bg-custom-background-gray">
        <div className="mt-20 flex items-center overflow-hidden ">
          <h2 className="b-section-marquee-text font-space text-4xl text-custom-gray md:text-5xl lg:text-8xl">
            {" "}
            SFU ESPORTS ASSOCIATION // SFU ESPORTS ASSOCIATION //
          </h2>
          <h2 className="b-section-marquee-text font-space text-4xl text-custom-gray md:text-5xl lg:text-8xl">
            {" "}
            SFU ESPORTS ASSOCIATION // SFU ESPORTS ASSOCIATION //
          </h2>
        </div>
      </section>

      <div className="my-64 px-4 sm:mx-auto sm:max-w-2xl">
        <p>
          I’ve created over 40 personalized banners as per the individual
          requests of our competitive and Varsity players, whom I've
          communicated with throughout the process.
          <br />
          <br />
          The following are 10 selected works:
        </p>
      </div>

      <div className="mt-20 flex flex-wrap">
        {imageSources.map((image, index) => (
          <div key={index} className="w-full md:w-1/2">
            <img src={image} alt={`Image ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>
      <ProjectNav projectsData={projectsData} />
    </section>
  );
};

export default SFUEA;
