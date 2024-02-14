import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import projectsData from "../../projectsData";
import ProjectNav from "../../components/ProjectNav";
import ProjectPageHeader from "../../components/ProjectPageHeader";

import erDiagram from "../../assets/images/roamfy/ER-diagram.webp";
import editScreenCast from "../../assets/videos/roamfy/roamfy-edit.mp4";
import commentScreenCast from "../../assets/videos/roamfy/comment.mp4";
import deleteConfirm from "../../assets/videos/roamfy/delete-confirm.mp4";
import passwordChange from "../../assets/images/roamfy/passwordChange.webp";

const ROAMFY: React.FC = () => {
  // //brings to top of page
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Find the project with the title 'SFU Esports Association'
  const roamfyProject = projectsData.find(
    (project) => project.title === "Roamfy (IAT 352)",
  );

  if (!roamfyProject) {
    return <div>Roamfy (IAT 352) project found</div>;
  }

  return (
    <>
      <section className="bg-custom-background-gray font-space">
        <ProjectPageHeader project={roamfyProject} />

        <section className="grid grid-cols-12 px-4 pt-10 lg:px-20">
          <div className="col-span-full row-start-1 my-10 md:col-span-6 md:mt-20">
            <h3 className="mb-5 text-2xl">Overview</h3>
            <p className="w-full md:w-4/5">
              This project employed the XAMPP Development environment taught in
              IAT 352. PHP served for server-side processing, generating dynamic
              content, interacting with the MySQL database, and handling user
              requests. AJAX (Asynchronous JavaScript and XML) and jQuery
              enhanced user interaction, ensuring a responsive interface.
            </p>
          </div>
          <div className="col-span-full col-start-1 row-start-2 mt-10 md:col-span-6 md:col-start-7 md:row-start-1 md:mt-20">
            <h3 className="mb-5 text-2xl">Project Motivations</h3>
            <p className="w-full md:w-4/5">
              Roamfy is an itinerary sharing platform designed to assist users
              and visitors in planning, tracking, exploring, and sharing trip
              itineraries. The platform facilitates community engagement by
              offering a homepage to explore all itineraries, detailed pages
              with daily entries, a comment section, and an itinerary editing
              page.
            </p>
          </div>
        </section>

        <section className="mt-20 grid grid-cols-12 px-4 lg:px-20">
          <h3 className="col-span-full mb-5 text-2xl">The Database</h3>
          <p className="col-span-full col-start-1 row-start-2 md:col-span-5">
            To design the SQL database structure, the main components and
            content units were decided. The project focused on two main
            entities: Itineraries and Users.
          </p>
          <ul className="col-span-full col-start-1 row-start-3 mt-20 list-disc pl-5 md:col-span-5 md:col-start-7 md:row-start-2 md:mt-0">
            <li>
              <strong>Members</strong> can create multiple{" "}
              <strong>itineraries.</strong>
            </li>
            <li>
              <strong>itineraries</strong> can have optional day{" "}
              <strong>entries.</strong>
            </li>
            <li>
              <strong>itineraries</strong> have comments, allowing{" "}
              <strong>members</strong> to <strong>comment.</strong>
            </li>
            <li>
              <strong>itineraries</strong> can be liked by{" "}
              <strong>members</strong>, adding them to their liked collection.
            </li>
          </ul>
          <div className="col-span-full col-start-1 row-start-4 mt-20 md:col-span-8 md:col-start-3 md:row-start-3">
            {
              <img
                src={erDiagram}
                alt={roamfyProject.title}
                className="w-full"
              />
            }
            <p className="pt-2">
              Entity Relationship Diagram for the Roamfy database
            </p>
          </div>
        </section>

        <section className="grid grid-cols-12 px-4 md:my-10 lg:px-20">
          <div className="col-span-full col-start-1 mt-20 md:col-span-10 md:col-start-2 lg:col-span-8  lg:col-start-3">
            <h3 className="mb-5 text-2xl">Implementation</h3>
            <p className="mb-20 md:w-3/4">
              The website's implementation ensures a smooth flow of data between
              the frontend and backend, allowing users to seamlessly plan,
              share, and receive feedback on their travel itineraries. The
              integration of AJAX and jQuery enhances the user interface,
              providing a dynamic and responsive platform for a community.
            </p>
            <video className="mb-5" loop autoPlay muted>
              <source src={editScreenCast} type="video/mp4" />
            </video>
            <p className="mb-40 text-base">
              Itinerary filtering and editing page utilizing AJAX for responsive
              and asynchronous results
            </p>

            <video className="mb-5" loop autoPlay muted>
              <source src={commentScreenCast} type="video/mp4" />
            </video>
            <p className="mb-40 text-base">AJAX Comment posting</p>
          </div>

          <div className="col-span-8 row-start-2 md:col-span-6 md:col-start-2 lg:col-span-5  lg:col-start-3">
            <video className="mb-5" loop autoPlay muted>
              <source src={deleteConfirm} type="video/mp4" />
            </video>
            <p className="col-span-full text-base">
              Itinerary deletion confirmation and show password
            </p>
          </div>
          <div className="col-span-4 row-start-2 md:col-span-3 md:col-start-9 lg:col-span-2 lg:col-start-9">
            {
              <img
                src={passwordChange}
                alt={roamfyProject.title}
                className="w-full"
              />
            }
          </div>
        </section>
        <ProjectNav projectsData={projectsData} />
      </section>
    </>
  );
};

export default ROAMFY;
