import {
    backend,
    creator,
    web,
    postman,
    javascript,
    python,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    nextjs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    java,
    shopify,
    carrent,
    lms,
    jobit,
    tripguide,
    django,
    mysql,
    cloudinary,
    prepwise,
    youtube,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Next JS",
        icon: nextjs,
    },
    {
        title: "Node + Express.js",
        icon: backend,
    },
    {
        title: "React JS",
        icon: creator,
    },
];

const technologies = [
    {
        name: "python",
        icon: python,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "django",
        icon: django,
    },
    {
        name: "nextjs",
        icon: nextjs,
    },
    {
        name: "mysql",
        icon: mysql,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "postman",
        icon: postman
    },
];


const experiences = [
    {
        title: "Youtube Backend Logic",

        icon: youtube,
        iconBg: "#383E56",

        points: [
            "Developed a YouTube-like backend using Express.js and Node.js, incorporating advanced features to enhance user engagement and interactivity.",
            "Implemented a unique tweet-like posting system to streamline content sharing and improve platform interaction.",
            "Integrated user analytics to track channel subscriber counts and subscribed channels, enabling data-driven optimizations.",
            "Optimized data retrieval processes to ensure a seamless and efficient user experience.",
        ],
    },
    {
        title: "AI-Powered Mock Interview Preparation",
        icon: prepwise,
        iconBg: "#E6DEDD",
        points: [
            "Developed a Next.js-based mock interview platform with AI Studio SDK (Gemini) for realistic question generation and Vapi.ai for voice assistant integration, delivering an immersive interview simulation experience.",
            "Built a scalable backend with Firebase for real-time data storage and user authentication, while leveraging Next.js for server-side rendering, ensuring fast and secure performance.",
            "Designed a polished, accessible frontend using Shadcn/ui and Tailwind CSS, and deployed the application on Vercel for optimal scalability and global accessibility. ",
            "Deployed the application on Vercel for high scalability, global accessibility, and optimized performance",
        ],
    },
    {
        title: "LMS",
        icon: lms,
        iconBg: "#383E56",
        points: [
            "Designed and developed a full-stack LMS application using the MERN stack (MongoDB, Express.js, React, Node.js), ensuring scalability and high performance for seamless learning management. ",
            "Engineered the frontend with React for an intuitive UI, built a RESTful backend with Node.js & Express.js, and leveraged MongoDB for efficient data storage and retrieval, enhancing system responsiveness. ",
            "Built a Node.js/Express.js backend with JWT authentication, enabling secure user sessions. Utilized MongoDB for efficient data storage/retrieval and implemented caching strategies to improve system responsiveness. ",
            "Optimized data management using MongoDB for efficient storage/retrieval and implemented caching strategies to enhance system speed and responsiveness.",
        ],
    },
    {
        title: "Tweet Application",
        iconBg: "#E6DEDD",

        points: [
            "Developed a secure Twitter-like web application using Django framework, implementing user authentication to ensure only verified users could create, post, and manage tweets. ",
            "Engineered a robust backend with Django for scalable performance, optimizing data handling and security protocols to enhance user privacy and platform integrity.",
            "Implemented platform integrity measures to safeguard against unauthorized access while maintaining seamless functionality for posting and managing tweets.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "AI-Powered Mock ",
        description:
            "Developed a web-based mock interview platform with AI-powered voice assistance, enabling users to customize interviews by technology, role, and question count. Built with Next.js for performance and Firebase for real-time data, delivering an immersive and scalable interview experience. ",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "shadcn/ui",
                color: "pink-text-gradient",
            },
        ],
        image: prepwise,
        source_code_link: "https://github.com/Ankit23122001/ai_mock_interview",
    },
    {
        name: "Youtube Backenbd",
        description:
            "Built a YouTube-like backend with RESTful APIs for core video functionalities and added a unique tweet-style social feature for user engagement. Implemented secure authentication, efficient database design, and seamless CRUD operations for videos, comments, and posts. ",
        tags: [
            {
                name: "express",
                color: "blue-text-gradient",
            },
            {
                name: "postman",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
        ],
        image: youtube,
        source_code_link: "https://github.com/Ankit23122001/Youtube-Backend-Tweet",
    },
    {
        name: "Learning Managemnent System",
        description:
            "Developed a Learning Management System with secure role-based authentication, enabling personalized dashboards and permissions. Integrated video upload functionality for course content, built with MERN stack for scalability.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
        ],
        image: lms,
        source_code_link: "https://github.com/Ankit23122001/LMS",
    },
];

export { services, technologies, experiences, testimonials, projects };
