import homepageIMG from "./assets/images/homepageIMG.jpg";


const logotext = "ATHARV";

const meta = {
    title: "Atharv Thaker",
    description: "Aspiring Software Engineer skilled in Python, Java, and web development.",
};

const introdata = {
    title: "Hey, I'm Atharv (a-tar-v) and I'm...",
    animated: {
        first: "an aspiring software engineer.",
        second: "a senior CS student.",
        third: "a BIG sports fan!",
    },
    description: "Check out all my various endeavors:",
    your_img_url: homepageIMG,
};

const aboutme = {
    title: "About Me",
    description:
        "I am a senior Computer Science student at Clark University with a minor in Business Management & Business Analytics. I gained hands-on experience as a backend engineer intern at Shell, enhancing their CI/CD pipeline and increasing unit test coverage. I'm passionate about software engineering and am seeking a full-time role to contribute to innovative projects.",
};

const experience = [
    {
        jobtitle: "Backend Software Engineer Intern",
        where: "Shell, Houston, TX",
        date: "May 2024 – August 2024",
        description: [
            "Developed unit tests using pytest to increase test coverage by 46%.",
            "Enhanced CI/CD pipeline by creating coverage-summary artifact within GitHub Actions.",
            "Resolved critical security issues identified by Mend and tackled code smells from SonarQube scans.",
            "Refactored legacy code for better readability and performance and updated documentation for clarity.",
        ],
    },
    {
        jobtitle: "Data Structures Teaching Assistant",
        where: "Clark University, Worcester, MA",
        date: "August 2023 – Present",
        description: [
            "Graded assignments, conducted weekly office hours, and assisted on in-class assignments and lab sessions.",
            "Taught students difficult class concepts and provided individualized homework for further aid.",
        ],
    },
    {
        jobtitle: "Social Media Digital Marketing",
        where: "Remote Freelance",
        date: "April 2023 – Present",
        description: [
            "Utilized Adobe Photoshop & Adobe Premiere Pro to produce visually engaging social media content for clients.",
            "Provided creative ideas to clients to ensure alignment of company vision with growth of social media.",
            "Worked with a variety of clients remotely as an integral part of social media management success.",
        ],
    },
];

const projects = [
    {
        name: "Game Design VR Project",
        date: "August 2021 – December 2021",
        description: [
            "Led a 5-member team in developing a VR game using Unity and C#.",
            "Organized weekly meetings to ensure deadlines were met.",
            "Overcame technical challenges through communication and collective problem-solving.",
        ],
    },
    {
        name: "Connecting Alumni & Students Web Team Project",
        date: "January 2023 – Present",
        description: [
            "Developing a website to connect students with alumni for mock interviews and resume help.",
            "Used Django, Python, HTML, CSS, Jira, and Figma to complete the project.",
        ],
    },
];

const education = [
    {
        degree: "Bachelor of Arts in Computer Science",
        institution: "Clark University, Worcester, MA",
        date: "Expected May 2025",
        details: [
            "Minor in Business Management & Business Analytics",
            "GPA: 3.47/4.00",
        ],
    },
];

const skills = [
    "Python",
    "Java",
    "JavaScript",
    "HTML/CSS",
    "C#",
    "CI/CD",
    "MATLAB",
    "Web Development",
    "Adobe Photoshop",
    "Figma",
];

const languages = ["English", "Gujarati", "Hindi"];


const dataportfolio = [
    {
      img: homepageIMG,
      name: "Game Design VR Project",
      description:
        "Led a 5-member team in developing a VR game using Unity and C#.",
      link: null, // Link was lost
    },
    {
      img: homepageIMG,
      name: "Connecting Alumni & Students Web Team Project",
      description:
        "Developed a website to connect students with alumni using Django and Python.",
      link: "https://github.com/Levrk/Clark-Alumni-Website",
    },
    // Add more projects as needed
  ];

const contactConfig = {
    YOUR_EMAIL: "atharvth@gmail.com",
    YOUR_PHONE_NUMBER: "860-861-8168",
    description:
        "Feel free to reach out to me via email or phone. Let's connect!",
    // Create an EmailJS.com account
    // Check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "your_service_id",
    YOUR_TEMPLATE_ID: "your_template_id",
    YOUR_USER_ID: "your_user_id",
};

const socialprofils = {
    github: "https://github.com/your-github-username", // Replace with your GitHub profile
    linkedin: "https://linkedin.com/in/your-linkedin-username", // Replace with your LinkedIn profile
};

export {
    meta,
    aboutme,
    dataportfolio,
    experience,
    projects,
    education,
    skills,
    languages,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
