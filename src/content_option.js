const logotext = "HAROLD";
const logoImage = require("./assets/images/harry-logo-home.jpg");
const meta = {
    title: "Harold Fich",
    description: "I’m Harold Fich data scientist _ Full stack devloper,currently working in New York",
};

const introdata = {
    title: "I’m Harold Fich.",
    animated: {
        first: "I love coding.",
        second: "I create solutions.",
        third: "I do stand-up comedy.",
    },
    description: "I graduated from Monroe College with a Bachelor of Science in Computer Information Systems in 2018, where I learned the fundamentals of programming, database management, networking, and security. I am passionate about learning new technologies and staying at the forefront of an ever-changing industry. I am a self-motivated individual, with strong interpersonal and communication skills, and a technical background. My goal is to create innovative and scalable solutions that solve real-world problems and add value to the users and the business.",
    your_img_url: logoImage,
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "Experienced Software Engineer with a strong background in developing scalable web applications and maintaining CI/CD pipelines. Proficient in JavaScript, TypeScript, Python, and GoLang, with hands-on experience in NodeJS, React, and Azure. Adept at working in fast-paced environments and delivering high-quality software solutions.",
};
const worktimeline = [{
        jobtitle: "DevOps & Software Engineer",
        where: "Comcast",
        date: "February 2023 – October 2023",
    },
    {
        jobtitle: "Azure Developer Support Engineer",
        where: "Microsoft",
        date: "August 2022 – January 2023",
    },
    {
        jobtitle: "Software Engineer",
        where: "Nava Benefits",
        date: "February 2022 – July 2022",
    },
    {
        jobtitle: "Software Engineer",
        where: "StructionSite",
        date: "April 2021 – November 2021",
    },{
        jobtitle: "QA Automation Engineer",
        where: "Comcast",
        date: "January 2019 - April 2021",
    },
];

const skills = [{
        name: "JavaScript",
        value: 90,
    },
    {
        name: "Python",
        value: 85,
    },
    {
        name: "NodeJS",
        value: 80,
    },
    {
        name: "React",
        value: 75,
    },
    {
        name: "DevOps",
        value: 85,
    },
];

const services = [{
        title: "DevOps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Beckend Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "haroldfich@gmail.com",
    YOUR_FONE: "Email for phone contact",
    description: "Reach out for interviews, comedy shows, event bookings, other inquiries or just to show love.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/harrylinux",
    instagram: "https://instagram.com",
    linkedin: "https://www.linkedin.com/in/harold-fich-2bb4b4128/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};