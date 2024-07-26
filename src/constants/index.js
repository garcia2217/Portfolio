import project1 from "../assets/projects/laptop.jpeg";
import project2 from "../assets/projects/motor.jpeg";
import project3 from "../assets/projects/carwashcafe.jpeg";
// import project4 from "../assets/projects/project-4.jpg";
import SMP from "../assets/educations/smp.jpg";
import SMA from "../assets/educations/sma.jpg";

export const HERO_CONTENT = `
I am an active fifth-semester Computer Science student at Tarumanagara University with experience in developing web and mobile applications as well as performing data analysis with or without machine learning algorithms. I am proficient in various programming languages such as C++, Java, Python, JavaScript, Dart, and PHP, and familiar with frameworks such as Express.js, Laravel, React.js, Tailwind CSS, and Bootstrap. Additionally, I have skills in managing databases using MongoDB, Firebase, and PostgreSQL. I possess strong problem-solving abilities, can work effectively in a team, conduct analysis, and communicate effectively.
`;

export const ABOUT_TEXT = `I am a fifth-semester Computer Science student at Tarumanagara University, with a keen interest in artificial intelligence. Currently, I am focusing my studies on web development and data technology. Over the course of my studies, I have gained proficiency in various programming languages, including C++, Java, Python, Dart, HTML, CSS, JavaScript, and PHP. Additionally, I have experience working with frameworks such as Express.js, React.js, and Laravel, as well as database platforms like MongoDB, Firebase, and PostgreSQL. My ultimate goal is to work at a big tech company where I can continuously learn and contribute my skills to impactful projects. I am passionate about staying at the forefront of technological advancements and am always eager to take on new challenges in the tech world.`;

export const EDUCATIONS = [
  {
    year: "2016 - 2019",
    grade: "Junior High School",
    school: "Kristen Yusuf School",
    image: SMP,
    // description: `As a tutor for second junior high school and first senior high school`,
    // technologies: ["Math", "Physic", "Chemistry"],
  },
  {
    year: "2019 - 2022",
    grade: "Senior High School",
    school: "SMAN 2 Jakarta",
    image: SMA,
  },
];

export const EXPERIENCES = [
  {
    year: "2022 - 2024",
    role: "Tutor",
    company: "Education DYnamic",
    description: `As a tutor, I taught Math, Physics, and Chemistry to 8th and 10th grade students. I was responsible for preparing students for exams and specific projects, ensuring they understood key concepts and could apply them effectively. I focused on creating a supportive learning environment where students felt comfortable asking questions and tackling challenging problems.`,
    technologies: ["Math", "Physic", "Chemistry"],
  },
  {
    year: "2024",
    role: "Teacher Assistant",
    company: "Tarumanagara University",
    description: `As a Teacher Assistant at Tarumanagara University, I assisted with the Big Data course, teaching students how to analyze data and use various analytical tools. In the Linear Algebra course (Computation I), I supported students during their assignments, providing guidance and clarification on complex topics. I also led classes and discussions, and assisted with grading assignments, helping to ensure students' understanding and progress in the course.`,
    technologies: ["Python", "Microsoft Excel"],
  },
];

export const PROJECTS = [
  {
    title: "Online Laptop Store Website",
    image: project1,
    link: "https://github.com/KentDylan/UTS_Backend.git",
    description:
      "An e-commerce platform that allows users to purchase laptops online, catering to the growing preference for online shopping. This full-stack application features both client-side and server-side functionalities. Admins can manage users, products, and orders, ensuring smooth operations and inventory control. User authentication is handled using Passport.js, and the website leverages various Node.js libraries, including Mongoose for MongoDB connection, EJS-layouts for templating, and Express.js for routing.",
    technologies: ["HTML", "CSS", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Used Motorcycle Store Website",
    image: project2,
    link: "https://github.com/KentDylan/Uas_Backend_Uung_Motor.git",
    description:
      "A web application designed to help 'Uung Motor', a local used motorcycle store, expand its reach by selling motorcycles online. This full-stack website provides both client-side and server-side functionalities. Business owners can manage products, users, orders, and appointments, allowing customers to book appointments to view motorcycles in person. The project uses JWT for authentication and PostgreSQL as the database to ensure secure and efficient data management.",
    technologies: ["Laravel", "PostgreSQL"],
  },
  {
    title: "Car Wash and Cafe Mobile Application",
    image: project3,
    link: "https://github.com/KentDylan/Beans-Bubbles.git",
    description:
      "A mobile application that enables users to book car wash appointments and place orders at a cafe, offering convenient service bundles. Users can schedule car wash appointments at their preferred times and order food and drinks from the cafe via the app. The application uses Firebase for authentication and as the database, ensuring secure user data management and real-time updates.",
    technologies: ["Flutter", "Firebase"],
  },
];

export const CONTACT = {
  address: "Jakarta, Indonesia",
  phoneNo: "+62 819 3416 8394",
  email: "emmanuel.535220103@stu.untar.ac.id",
};
