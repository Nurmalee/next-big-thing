//react-icons
import { FaReact, FaCss3Alt, FaHtml5, FaBootstrap, FaNodeJs } from 'react-icons/fa'
import { SiAdobeillustrator, SiFirebase, SiMaterialui, SiTailwindcss, SiStyledcomponents, SiRedux, SiNextdotjs } from 'react-icons/si'
import { DiJqueryLogo, DiJavascript, DiCodeigniter } from 'react-icons/di'
import { CgFigma } from 'react-icons/cg'
import { BsCodeSlash } from 'react-icons/bs'
import { MdGraphicEq } from 'react-icons/md'

export const navList = [
    {
        title: 'home',
        href: '#home'
    },
    {
        title: 'about',
        href: '#about'
    },
    {
        title: 'services',
        href: '#services'
    },
    {
        title: 'works/projects',
        href: '#projects'
    },
    // {
    //     title: 'contact me',
    //     href: '#contactme'
    // }
]

export const bannerList = [
    {
        id: 1,
        title: 'the hub of enthralling & functional websites',
        info: 'Javascript is the now and the future. I build exquisite and functional user interfaces which are in trueness, functional. This portfolio in fact was made with react js. It showcases the flexibility of functional components with a bunch of use cases for the most commonly used react hooks.',
    },
    {
        id: 2,
        title: 'seamless focus and priority on responsiveness',
        info: 'Responsiveness prioritized. At the heart of all my designs and websites is responsive ability for all user interfaces in what i like to call the "ultra-responsive confidence". All my websites are made to work on all devices to ensure an unforgettable user experience that will keep you in awe.',
    },
    {
        id: 3,
        title: 'web app clones that make the original look the inferior',
        info: 'Herein is a few collection of clones of popular social media spaces. These builds make the original looks as though they might need an upgrade.',
    }
]

export const myServices = [
    {
        title: "RESPONSIVE WEB DESIGN",
        Icon: DiCodeigniter,
        statement: "Responsiveness prioritized. All my designs feature my trademark  'ultra-responsive confidence'. Pages and interfaces are made to transition seamlessly across all screen sizes for an hitch-free user experience"
    },
    {
        title: "GRAPHIC DESIGN",
        Icon: MdGraphicEq,
        statement: "When I'm not designing with the web, I can be found designing on Adobe Illustrator. It's safe to say that I think and breathe design"
    },
    {
        title: "CLEAN/SCALABLE CODE",
        Icon: BsCodeSlash,
        statement: "I write code that is characteristically easy to read, easy to adjust, easy to update, easy to upgrade. My code base is constantly updated with technological/industry trends and new ideas"
    },
]

export const techList = [
    {
        title: 'HTML5',
        Icon: FaHtml5,
    },
    {
        title: 'CSS3',
        Icon: FaCss3Alt,
    },
    {
        title: 'Javascript (ES6+)',
        Icon: DiJavascript,
    },
    {
        title: 'React JS',
        Icon: FaReact,
    },
    {
        title: 'Next JS',
        Icon: SiNextdotjs,
    },
    {
        title: 'Redux',
        Icon: SiRedux,
    },
    // {
    //     title: 'Node JS (with MongoDB & Express)',
    //     Icon: FaNodeJs,
    // },
    {
        title: 'Firebase',
        Icon: SiFirebase,
    },
    {
        title: 'Styled-Components',
        Icon: SiStyledcomponents,
    },
    // {
    //     title: 'Material Ui',
    //     Icon: SiMaterialui,
    // },
    {
        title: 'Tailwind CSS',
        Icon: SiTailwindcss,
    },
    {
        title: 'Bootstrap',
        Icon: FaBootstrap,
    },
    // {
    //     title: 'jQuery',
    //     Icon: DiJqueryLogo,
    // },
    {
        title: 'Adobe illustrator & CorelDraw',
        Icon: SiAdobeillustrator,
    },
    {
        title: 'Figma',
        Icon: CgFigma,
    }
]

export const projectList = [
    {
        imageUrl: '/images/works/Service_School_House.PNG',
        title: 'Service School House',
        desc: 'A training services platform designed to help organizations empower their contact center staff to provide outstanding customer service',
        type: 'react js',
        link: "https://learningplatform.sandbox.9ijakids.com/"
    },
    {
        imageUrl: '/images/works/nimdee_project.PNG',
        title: 'Nimdee',
        desc: 'An educational platform that provides students (of junior school level), schools and parents with thousands of worksheets and other learning materials',
        type: 'react js',
        link: "https://nimdee.com"
    },
    {
        imageUrl: '/images/works/moviesNow.PNG',
        title: 'moviesNow.se',
        desc: 'A movie platform utilising the IMDB database to render various categories/genres of movies',
        type: 'next js',
        link: "https://moviesnow-se.vercel.app/"
    },
    // {
    //     imageUrl: '/images/works/formplus_templates.JPG',
    //     title: 'formplus templates task',
    //     type: 'react js',
    //     link: "https://formplus-templates-api-task.netlify.app/"
    // },
    {
        imageUrl: '/images/works/jumia-clone.JPG',
        title: 'Jumia E-Commerce (clone)',
        desc: 'Jumia is the most popular e-commerce website in Nigeria. This build was built for the seemlessness of the jumia cart page and functionalities',
        type: 'react js',
        link: "https://jumia-commercial.netlify.app/"
    },
    // {
    //     imageUrl: '/images/works/formplus_templates.JPG',
    //     title: 'formplus templates task',
    //     type: 'react js',
    //     technologies: 'html (jsx), css, javascript, react, redux',
    //     React: FaReact,
    //     Redux: SiRedux,
    //     StyledComponents: SiStyledcomponents,
    //     link: "https://formplus-templates-api-task.netlify.app/"
    // },
    {
        imageUrl: '/images/works/linkedIn-clone.JPG',
        title: 'linkedIn (clone)',
        desc: 'A web app clone of the most popular professional socialization platform with text post, picture upload and commenting functionalities. Built with React and Firebase',
        type: 'react js',
        link: "https://nurmalee.github.io/linkedIn-webapp-clone/"
    },
    {
        imageUrl: '/images/works/instagram_clone.JPG',
        title: 'Instagram (clone)',
        desc: 'A web app clone of an instagram user landing page with text post, picture upload and commenting functionalities. Built with React and Firebase',
        type: 'react js',
        link: "https://instagramlee.herokuapp.com"
    },
    // {
    //     imageUrl: '/images/works/facebook_clone.JPG',
    //     title: 'facebook (clone)',
    //     desc: 'A clone of the web version of my personal facebook landing page',
    //     type: 'react js',
    //     link: "https://nurmalee.github.io/facebook-webapp-clone/"
    // },
    // {
    //     imageUrl: '/images/works/My-Porsche-Garage-Landing-Page.JPG',
    //     title: 'porsche garage',
    //     type: 'vanilla js',
    //     link: "https://nurmalee.github.io/Old-Projects/my_porsche_garage/garage.html"
    // },
    // {
    //     imageUrl: '/react-random-users-app.JPG',
    //     title: 'random users app',
    //     type: 'react js',
    //     technologies: 'html (jsx), css, javascript, react, react-icons, material-ui',
    //     React: FaReact,
    //     MaterialUi: SiMaterialui,
    //     link: "https://nurmalee.github.io/github-pages-my-users-app-react/"
    // },
    // {
    //     imageUrl: '/Youtube-VanillaJs-Clone.JPG',
    //     title: 'products pricing page',
    //     type: 'vanilla js',
    //     technologies: 'html, css, javascript',
    //     Html5: FaHtml5,
    //     Css: FaCss3Alt,
    //     Javascript: DiJavascript,
    //     link: "https://nurmalee.github.io/Old-Projects/product_pricing/html/products.html"
    // },
    // {
    //     imageUrl: '/Youtube-VanillaJs-Clone.JPG',
    //     title: 'pepsi landing page',
    //     type: 'vanilla js',
    //     technologies: 'html, css, javascript',
    //     Html5: FaHtml5,
    //     Css: FaCss3Alt,
    //     Javascript: DiJavascript,
    //     link: "https://nurmalee.github.io/Old-Projects/pepsi_landing_page/pepsi.html"
    // },
    // {
    //     imageUrl: '/images/works/Youtube-VanillaJs-Clone.JPG',
    //     title: 'youtube (clone)',
    //     type: 'vanilla js',
    //     link: "https://nurmalee.github.io/Old-Projects/youtube_clone/index.html"
    // },
    // {
    //     imageUrl: watchesHq,
    //     title: 'watches sales demo',
    //     type: 'vanilla js',
    //     technologies: 'html, css, javascript',
    //     Html5: FaHtml5,
    //     Css: FaCss3Alt,
    //     Javascript: DiJavascript,
    //     link: "https://nurmalee.github.io/Old-Projects/watches_hq/watches.html"
    // },
]