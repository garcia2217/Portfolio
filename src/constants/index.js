// import project1 from "../assets/projects/LaptopStore.png";
// import project2 from "../assets/projects/motor.jpeg";
// import project3 from "../assets/projects/carwashcafe.jpeg";
// import project4 from "../assets/projects/clustering.png";
import laptops from "../utils/laptopstore.js";
import motor from "../utils/uungmotor.js";
import beansbub from "../utils/beansbub.js";
import cluster from "../utils/cluster.js";

export const ABOUT_TEXT = `I’m a fifth-semester Computer Science student at Tarumanagara University with a strong interest in web development and data technology. Proficient in Python and JavaScript, I’ve built full-stack web applications using frameworks like Express.js and Laravel. In my machine learning class, I completed a project applying classification and clustering algorithms with Python libraries such as NumPy, Pandas, Seaborn, and Scikit-learn. My goal is to work at a top tech company, where I can continue developing my skills and contribute to impactful projects. Driven by curiosity and a passion for technology, I am always eager to tackle new challenges in the tech world.`;

export const EXPERIENCES = [
  {
    year: "August 2024 - Present",
    role: "Lab Instructor - Distributed Systems, Computer Systems",
    company: "Tarumanagara University",
    type: "academic", // new field to differentiate academic/industry experiences
    description: `In Distributed Systems, I guided students in using GNS3 and VirtualBox to design network topologies, configure routers, switches, firewalls, and virtual servers, and troubleshoot configuration errors. For Computer Systems, I assisted students with digital circuit assignments, introduced them to Arduino simulations using Wokwi, and provided hands-on experience with Raspberry Pi and PC components. In both courses, I also graded assignments, collaborated with a co-instructor on lab exercises when requested, and offered theoretical explanations whenever students encountered challenges.`,
    technologies: ["GNS3", "Virtual Box", "Wokwi", "Raspberry Pi"],
    courses: [
      {
        name: "Distributed Systems",
        topics: ["Network Topology", "Network Configuration"],
        tools: ["GNS3", "VirtualBox"],
      },
      {
        name: "Computer Systems",
        topics: [
          "Digital Circuits",
          "Arduino Programming",
          "Hardware Components",
        ],
        tools: ["Wokwi", "Raspberry Pi"],
      },
    ],
  },
  {
    year: "February 2024 - June 2024",
    role: "Lab Instructor - Big Data, Computation II",
    company: "Tarumanagara University",
    type: "academic",
    description: `In Big Data Course, I led lab sessions focused on data cleaning, analysis, and visualization using Python libraries such as Pandas, NumPy, Matplotlib, and Seaborn. In Computation II Course, I supported students during their in-class assignments. Advised students on their final project, which involved researching and applying linear algebra to a real-world problem in the form of a paper. In both courses, I graded assignments and provided assistance to students whenever they needed help during lab sessions, ensuring their understanding of the concepts.`,
    technologies: ["Python", "Microsoft Excel"],
    courses: [
      {
        name: "Big Data",
        topics: ["Data Cleaning", "Data Analysis", "Data Visualization"],
        tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      },
      {
        name: "Computation II",
        topics: ["Linear Algebra", "Problem Solving"],
        tools: ["Microsoft Excel"],
      },
    ],
  },
  {
    year: "July 2022 - May 2024",
    role: "Academic Tutor",
    company: "Education DYnamic",
    type: "teaching",
    description: `As an academic tutor, I taught Math, Physics, and Chemistry to 10th grade students. I was responsible for preparing students for exams and specific projects, ensuring they understood key concepts and could apply them effectively. I focused on creating a supportive learning environment where students felt comfortable asking questions and tackling challenging problems.`,
    technologies: ["Math", "Physics", "Chemistry"],
  },
];

export const PROJECTS = [
  {
    title: "Online Laptop Store Website",
    link: "https://github.com/KentDylan/UTS_Backend.git",
    description:
      "An e-commerce platform that allows users to purchase laptops online, catering to the growing preference for online shopping. This full-stack application features both client-side and server-side functionalities. Admins can manage users, products, and orders, ensuring smooth operations and inventory control. User authentication is handled using Passport.js, and the website leverages various Node.js libraries, including Mongoose for MongoDB connection, EJS-layouts for templating, and Express.js for routing.",
    technologies: ["HTML", "CSS", "Node.js", "Express.js", "MongoDB"],
    screenshots: laptops,
  },
  {
    title: "Used Motorcycle Store Website",
    link: "https://github.com/KentDylan/Uas_Backend_Uung_Motor.git",
    description:
      "A web application designed to help 'Uung Motor', a local used motorcycle store, expand its reach by selling motorcycles online. This full-stack website provides both client-side and server-side functionalities. Business owners can manage products, users, orders, and appointments, allowing customers to book appointments to view motorcycles in person. The project uses JWT for authentication and PostgreSQL as the database to ensure secure and efficient data management.",
    technologies: ["Laravel", "PostgreSQL"],
    screenshots: motor,
  },
  {
    title: "Car Wash and Cafe Mobile Application",
    link: "https://github.com/KentDylan/Beans-Bubbles.git",
    description:
      "A mobile application that enables users to book car wash appointments and place orders at a cafe, offering convenient service bundles. Users can schedule car wash appointments at their preferred times and order food and drinks from the cafe via the app. The application uses Firebase for authentication and as the database, ensuring secure user data management and real-time updates.",
    technologies: ["Flutter", "Firebase"],
    screenshots: beansbub,
  },
  {
    title: "Food Price Clustering Analysis in Kalimantan",
    link: "#",
    description:
      "A data-driven project that clusters cities in Kalimantan based on food prices in traditional markets using K-Means and Fuzzy C-Means algorithms. Using data sourced from Bank Indonesia’s food price database (https://www.bi.go.id/hargapangan/TabelHarga/PasarTradisionalDaerah), this analysis provides insights into regional price differences and market trends, supporting better-informed policy planning.",
    technologies: ["Python", "K-Means", "Fuzzy C-Means"],
    screenshots: cluster,
  },
];

export const CONTACT = {
  address: "Jakarta, Indonesia",
  phoneNo: "+62 819 3416 8394",
  email: "emmanuel.535220103@stu.untar.ac.id",
};
