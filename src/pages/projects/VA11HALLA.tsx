import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import projectsData from "../../projectsData";
import ProjectNav from "../../components/ProjectNav";
import ProjectPageHeader from "../../components/ProjectPageHeader";

import voxelRoom from "../../assets/images/va11halla/voxel-room.gif";
import ingameShot from "../../assets/images/va11halla/in-game-ui.webp";
import figmaShot1 from "../../assets/images/va11halla/figma-design-1.webp";
import figmaShot2 from "../../assets/images/va11halla/figma-design-2.webp";
import firebaseShot from "../../assets/images/va11halla/firebase-screenshot.webp";
import searchScreenCast from "../../assets/videos/va11halla/main-search.mp4";
import sortScreenCast from "../../assets/videos/va11halla/secondary-and-sort.mp4";

const SFUEA: React.FC = () => {
  // //brings to top of page
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const va11hallaProject = projectsData.find(
    (project) => project.title === "VA11-Hall-A Drinktionary Fansite",
  );

  if (!va11hallaProject) {
    return <div>No project found</div>;
  }
  return (
    <>
      <section className="bg-custom-background-gray font-space">
        <ProjectPageHeader project={va11hallaProject} />

        <section className="grid grid-cols-12 px-4 md:py-20 lg:px-20">
          <div className="col-span-full row-start-1 my-20 md:col-span-5 md:mt-10 md:flex md:flex-col md:justify-center">
            <h3 className="mb-5 text-2xl">Overview</h3>
            <p>
              A dashboard UI design/fan site that aims to provide a more
              user-friendly experience for accessing drink recipes from the 2016
              visual novel{" "}
              <a
                className="underline hover:text-custom-blue"
                href="https://store.steampowered.com/app/447530/VA11_HallA_Cyberpunk_Bartender_Action/"
                target="_blank"
              >
                Va-11 Hall-A by Sukeban Games.
              </a>
              <br></br>
              <br></br>
              This facilitated my introduction to React (UI library), Firebase
              (Google backend services), and Tailwind CSS (a CSS framework).
            </p>
          </div>

          <div className="col-span-12 row-start-2 md:col-span-6 md:col-start-7 md:row-start-1">
            {
              <img
                src={voxelRoom}
                alt={va11hallaProject.title}
                className="w-full"
              />
            }
            <p className="pt-2">
              Voxel art of the main character's room made with MagicaVoxel, also
              implemented with Threejs
            </p>
          </div>
        </section>

        <section className="mt-20 grid grid-cols-12 gap-y-20 px-4 pb-20 md:mt-0 lg:px-20">
          <div className="col-span-full row-start-1 block min-h-max md:col-span-5 md:flex md:flex-col md:justify-center">
            <h3 className="mb-5 text-2xl">Some Context</h3>
            <p>
              The gameplay and dialogue of Va-11 Hall-a revolve and progress
              through bartending. Creating drinks involves the mixing of
              components and following preparation steps, which can result in
              flavors that match customer’s requests.
              <br></br>
              <br></br>
              The choices of drinks and their proportions can influence the
              characters' moods and the direction of the narrative.
            </p>
          </div>

          <div className="col-span-full row-start-2 md:sticky md:top-1/4 md:col-span-6 md:col-start-7 md:row-start-1">
            {
              <img
                src={ingameShot}
                alt={va11hallaProject.title}
                className="w-full"
              />
            }
            <p className="pt-2">
              In-game screenshot of the drink mixing interface
            </p>
          </div>

          <div className="col-span-full row-start-3 md:col-span-5 md:row-start-2">
            <h3 className="mb-5 text-2xl">Project Motivations</h3>
            <p>
              A problem I saw was that the game’s recipe book doesn’t really
              allow for quick retrieval and comparison of drink recipes. Each
              recipe is restricted to its unique page, and players can only
              browse through name, flavor, and type individually.
              <br></br>
              <br></br>
              It's worth noting that the game's recipe book shares the same
              scene as the mixing interface. The recipe book is restricted to a
              certain size, and the act of mixing drinks isn't the sole focus of
              the game; rather, it's the dialogue and story.
              <br></br>
              <br></br>
              Nonetheless, I saw this as an opportunity to design a dashboard
              with a quicker search mechanism that also facilitates easy
              comparison between each drink.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-12 gap-y-20 px-4 pb-20 md:my-0 lg:px-20">
          <div className="col-span-full row-start-1 md:col-span-5 md:flex md:flex-col md:justify-center">
            <h3 className="mb-5 text-2xl">The Data</h3>
            <p>
              Instead of manually creating the Firebase database content, the
              BeautifulSoup Python library was used to scrape drink information
              from the{" "}
              <a
                className="underline hover:text-custom-blue"
                href="https://va11halla.fandom.com/wiki/Drinktionary"
                target="_blank"
              >
                va11halla.fandom site.
              </a>
            </p>
            <br></br>
            <p>
              The output from the Python script was then imported into Firebase.
            </p>
          </div>

          <div className="col-span-full row-start-2 md:col-span-6 md:col-start-7 md:row-start-1">
            {
              <img
                src={firebaseShot}
                alt={va11hallaProject.title}
                className="w-full"
              />
            }
            <p className="pt-2">Screenshot of Firebase Firestore collection</p>
          </div>
        </section>

        <section className="grid grid-cols-12 px-4 md:mt-5 lg:px-20">
          <h3 className="col-span-full row-start-1 mb-5 text-2xl md:col-span-5">
            Figma Component Design
          </h3>
          <div className="col-span-12 row-start-2 mb-20 md:col-span-5">
            <p>
              The primary components of this dashboard could be split into
              interactive sort and filter selections, and content units (drink
              cards). Adhering to the games colorful and busy cyberpunk theme, I
              used vivid neon-like colors to denote interactive dashboard
              elements and drink ingredients.
            </p>
          </div>
          <div className="col-span-full col-start-1 row-start-4 mb-20 mt-20 md:col-span-5 md:col-start-7 md:row-start-2 md:mt-0">
            <p>
              To reduce cognitive load and allows users to quickly scan and
              compare recipes, pills were implemented, with specific colors
              symbolizing in-game ingredients and their characteristics.
            </p>
          </div>
          <div className="col-span-full col-start-1 row-start-3 md:col-span-6">
            {
              <img
                src={figmaShot1}
                alt={va11hallaProject.title}
                className="w-full"
              />
            }
          </div>
          <div className="col-span-full row-start-5 md:col-span-6 md:col-start-7 md:row-start-3">
            {
              <img
                src={figmaShot2}
                alt={va11hallaProject.title}
                className="w-full"
              />
            }
          </div>
        </section>

        <section className="grid grid-cols-12 px-4 md:my-10 lg:px-20">
          <div className="col-span-full mt-20 md:col-span-10 lg:col-span-8">
            <h3 className="mb-5 text-2xl">
              Implementation: Multi-layered Search and Fitlering of drinks
            </h3>
            <p className="mb-20 md:w-3/4">
              In essence, the React implementation utilizes the Firebase SDK to
              fetch drink data from Firestore, organized in a 'drinks'
              collection. The data is then stored in the component's state with
              useState. Sorting options like name, price, or flavor are
              available, optimized using useMemo to prevent unnecessary
              recalculations.
              <br></br>
              <br></br>
              The sorting considers user-selected options such as search query,
              types, flavor, and sorting criteria for an efficient and
              responsive user experience, allowing easy exploration and
              selection of drinks.
            </p>
          </div>

          <div className="col-span-full xl:col-span-9">
            <video className="mb-2" loop autoPlay muted>
              <source src={searchScreenCast} type="video/mp4" />
            </video>
            <p className="mb-40 text-base">
              Search bar and Primary Flavour toggle
            </p>
          </div>

          <div className="col-span-full xl:col-span-9">
            <video className="mb-2" loop autoPlay muted>
              <source src={sortScreenCast} type="video/mp4" />
            </video>
            <p className="mb-40 text-base">Secondary flavor and sorting</p>
          </div>
        </section>

        <section className="px-4 lg:px-20 ">
          <h3 className="mb-5 text-2xl">Reflection</h3>
          <p className="mb-20 md:w-3/4 lg:w-1/2">
            Through this project, I had the opportunity to delve into web
            development technologies and successfully turn a concept into a
            functional design. I recognize that this project leaned more towards
            the development aspect, with the design of the dashboard serving
            primarily as an exercise. It was built upon the game's existing
            search mechanics, informed by my knowledge of the game and the
            players' needs when searching for drinks. Nonetheless, I may likely
            continue to build on this site if I have time or look for more
            community / fan-content to build.
          </p>
        </section>

        <ProjectNav projectsData={projectsData} />
      </section>
    </>
  );
};

export default SFUEA;
