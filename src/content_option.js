const logotext = "HAROLD";
const logoImage = require("./assets/images/harry-logo-home.jpg");
const meta = {
  title: "Harold Fich",
  description:
    "I’m Harold Fich data scientist _ Full stack devloper,currently working in New York",
};

const introdata = {
  title: "I’m Harold Fich.",
  animated: {
    first: "I love coding.",
    second: "I create solutions.",
    third: "I do stand-up comedy.",
  },
  description:
    "I graduated Summa Cum Laude from Monroe College with a Bachelor of Science in Computer Information Systems in 2018, where I learned the fundamentals of programming, database management, networking, and security. I am passionate about learning new technologies and staying at the forefront of an ever-changing industry. I am a self-motivated individual, with strong interpersonal and communication skills, and a technical background. My goal is to create innovative and scalable solutions that solve real-world problems and add value to the users and the business.",
  your_img_url: logoImage,
};

const dataabout = {
  title: "About myself",
  aboutme:
    "Experienced Software Engineer with a strong background in developing scalable web applications and maintaining CI/CD pipelines. Proficient in JavaScript, TypeScript, Python, and GoLang, with hands-on experience in NodeJS, React, and Azure. Adept at working in fast-paced environments and delivering high-quality software solutions.",
};
const worktimeline = [
  {
    jobtitle: "DevOps & Software Engineer",
    where: "Comcast",
    date: "February 2023 – October 2023",
  },
  {
    jobtitle: "Azure Development Engineer",
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
  },
  {
    jobtitle: "QA Automation Engineer",
    where: "Comcast",
    date: "January 2019 - April 2021",
  },
];

const skills = [
  {
    name: "JavaScript",
    value: 90,
  },
  {
    name: "Python",
    value: 85,
  },
  {
    name: "NodeJS",
    value: 85,
  },
  {
    name: "React",
    value: 80,
  },
  {
    name: "DevOps",
    value: 85,
  },
];

const services = [
  {
    title: "DevOps",
    description:
      "Dedicated and experienced DevOps Engineer with a strong background in building and optimizing CI/CD pipelines using GitHub Actions and Concourse. Skilled in containerization and orchestration with Docker and Kubernetes, ensuring seamless deployment and management of scalable applications. Proficient in automation with Terraform and Jenkins, streamlining infrastructure provisioning and continuous integration processes. Proven ability to collaborate with development and operations teams to enhance efficiency, reliability, and performance across the software development lifecycle.",
  },
  {
    title: "Beckend Development",
    description:
      "Passionate and highly skilled Backend Web Developer with extensive experience in designing and implementing scalable, robust, and secure web applications. Proficient in Python, JavaScript, GoLang, and Java, with a strong background in leveraging Postgres, Oracle, and MongoDB databases to ensure optimal data management and retrieval. Adept in utilizing AWS and Azure cloud services to deploy and manage complex applications, ensuring reliability and performance. Proven track record of collaborating effectively with cross-functional teams to deliver high-quality software solutions that meet and exceed client expectations.",
  },
  {
    title: "UI & UX Design",
    description:
      "If you made it this far, then you know my UI/UX design skills are up to par. Hit the contact form with any feedback you may have.",
  },
];

const dataportfolio = [
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/800/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/600/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/300/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/700/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },

  {
    img: "https://picsum.photos/400/600/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/300/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/550/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/700/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
];

const contactConfig = {
  YOUR_EMAIL: "haroldfich@gmail.com",
  YOUR_FONE: "Email for phone contact",
  description:
    "Reach out for interviews, comedy shows, event bookings, other inquiries or just to show love.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_8imwl4j",
  YOUR_TEMPLATE_ID: "template_yw8rkej",
  YOUR_PUBLIC_KEY: "OkEP9OIwJJotkSuvH",
};

const socialprofils = {
  github: "https://github.com/harrylinux",
  instagram:
    "https://www.instagram.com/harold.fich?igsh=aWVsc2JxYTkzYjA5&utm_source=qr",
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
