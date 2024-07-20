import crown from "./assets/images/sfuea/ottoisgun.webp";
import sunsetSeries from "./assets/images/sfuea/sunset-series.webp";
import roamfy from "./assets/images/roamfy/Roamfy-mockup.webp";
import va11halla from "./assets/images/va11halla/va11halla-mockup.webp";
import docgen from "./assets/images/docgen.png";
import cell from "./assets/images/cellcontour.png"

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
    title: "Roamfy",
    type: "Fullstack // SQL // Schema design",
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
    title: "My Resume API & Docs Generator",
    type: "Frontend // Backend // CRUD // Auth",
    technologies: ["Next.js", "MongoDB", "Express", "Node"],
    date: "03.2024",
    viewMoreLink: "https://kylezhao101-api-doc.vercel.app/",
    image: docgen,
    description:
      "A documentation generator for my personal API, using MDX to create dynamic navigation functionalities. The API backend service provides access to my resume and other related information stored in MongoDB, implementing API key middleware to allow only me to perform create, update, and delete operations.  ",
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
    scope: "Student Club executive",
    timeSpan: "08.2022 - ongoing",
  },
  {
    title: "Histopathological Lung Image Classification & Segmentation",
    type: "Machine Learning",
    technologies: ["Pytorch", "MatplotLib", "OpenCV"],
    apiReferenceLink: "https://github.com/sfu-cmpt340/2024_1_project_06",
    date: "04.2024",
    timeSpan: "03.2024 - 04.2024",
    image:cell,
    description: 
      "LPAI utilizes a PyTorch-based convolutional neural network to automatically classify and quantify lung cancer cells in histopathological images, incorporating preprocessing, model training, performance evaluation, and predictive visualization with cell counts.",
  },
  {
    title: "Fit Foodie",
    type: "App Development // Fullstack",
    technologies: ["Android Framework", "Google Maps SDK", "Material 3"],
    apiReferenceLink: "https://github.com/kylezhao101/fit-foodie-app",
    date: "04.2024",
    timeSpan: "02.2024 - 04.2024",
    image: "https://i.imgur.com/G4VlrWB.png",
  },
];

export default projectsData;
