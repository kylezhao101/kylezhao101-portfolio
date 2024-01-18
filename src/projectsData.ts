import crown from './assets/images/sfuea/ottoisgun.webp';
import sunsetSeries from './assets/images/sfuea/sunset-series.webp';
import roamfy from './assets/images/roamfy/Roamfy-mockup.webp';
import va11halla from './assets/images/va11halla/va11halla-mockup.webp';

const projectsData = [
    {
        title: 'VA11-Hall-A Drinktionary Fansite',
        type: 'UI Design // Web Development',
        technologies: ['React', 'Firebase', 'Tailwind', 'React Three Fiber', 'Python'],
        date: '08.2023',
        repoLink: 'https://github.com/kylezhao101/va11halla-drink-recipes',
        viewMoreLink: '/VA11HALLA',
        image: va11halla,
        pageImage: va11halla,
        pageImageCaption:'Mockup of the recipe dashboard',
    },
    {
        title: 'Roamfy (IAT 352)',
        type: 'Backend // SQL // CRUD // AJAX // Auth',
        technologies: ['PHP', 'mySQL', 'jQuery', 'HTML CSS'],
        date: '12.2023',
        repoLink: 'https://github.com/kylezhao101/remote-IAT352/tree/main/Roamfy',
        viewMoreLink: '/ROAMFY',
        image: roamfy,
        pageImage: roamfy,
        pageImageCaption: 'Mockup of the recipe dashboard',
    },
    {
        title: 'Resume REST API',
        type: 'Backend // CRUD // Auth',
        technologies: ['MongoDB', 'Express', 'Node'],
        date: '10.2023',
        apiReferenceLink: 'https://github.com/kylezhao101/kylezhao101-api'
    },
    {
        title: 'SFU Esports Association',
        type: 'Design Executive - GFX & player branding',
        technologies: ['Photoshop', 'Figma'],
        date: '2022 - ongoing',
        viewMoreLink: '/SFUEA',
        image: crown,
        pageImage: sunsetSeries,
        pageImageCaption: 'Sunset Series LAN Tournament Lanyards',
        
    },

];
  
export default projectsData;