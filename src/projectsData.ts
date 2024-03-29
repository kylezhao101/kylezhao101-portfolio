import crown from "./assets/images/sfuea/ottoisgun.webp";
import sunsetSeries from "./assets/images/sfuea/sunset-series.webp";
import roamfy from "./assets/images/roamfy/Roamfy-mockup.webp";
import va11halla from "./assets/images/va11halla/va11halla-mockup.webp";

const projectsData = [
  {
    title: "VA11-Hall-A Drinktionary Fansite",
    type: "Web Development // UI Design",
    technologies: [
      "React",
      "Firebase",
      "Tailwind",
      "React Three Fiber",
      "Python",
    ],
    date: "08.2023",
    timeSpan: "08.2023 - 09.2023",
    timeDescription: "Roughly spanning 2 months",
    repoLink: "https://github.com/kylezhao101/va11halla-drink-recipes",
    siteLink: "https://va11halla-drink-recipes.vercel.app",
    viewMoreLink: "/VA11HALLA",
    image: va11halla,
    pageImage: va11halla,
    pageImageCaption: "Mockup of the recipe dashboard",
    scope: "Independent & personal project",
  },
  {
    title: "Roamfy (IAT 352)",
    type: "Backend // SQL // CRUD // AJAX // Auth",
    technologies: ["PHP", "mySQL", "jQuery", "HTML CSS"],
    date: "12.2023",
    timeSpan: "11.2023 - 12.2023",
    timeDescription: "3 Weeks",
    repoLink: "https://github.com/kylezhao101/remote-IAT352/tree/main/Roamfy",
    viewMoreLink: "/ROAMFY",
    image: roamfy,
    pageImage: roamfy,
    pageImageCaption: "Mockup of the homepage dashboard",
    scope: "Academic Project. Teammate/contributor: Thomas Li",
  },
  {
    title: "My Resume REST API",
    type: "Backend // CRUD // Auth",
    technologies: ["MongoDB", "Express", "Node"],
    date: "10.2023",
    apiReferenceLink: "https://github.com/kylezhao101/kylezhao101-api",
    description:
      "An API backend service that provides access to my resume and other related information stored in MongoDB, implementing API key middleware to allow only me to perform create, update, and delete operations.",
  },
  {
    title: "SFU Esports Association",
    type: "Design Executive // Graphic Design & player branding",
    technologies: ["Photoshop", "Figma"],
    date: "08.2022 - ongoing",
    viewMoreLink: "/SFUEA",
    image: crown,
    pageImage: sunsetSeries,
    pageImageCaption: "Sunset Series LAN Tournament Lanyards",
    scope: "Student Club executive/volunteer",
    timeSpan: "08.2022 - ongoing",
  },
];

export default projectsData;
