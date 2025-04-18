const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 3, suffix: "+", label: "Satisfied Clients" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "I designed and developed the frontend for the company's main website, ensuring a responsive, adaptive and user-friendly experience. ",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "March 2024 - Present",
    responsibilities: [
      "Designed and implemented user interfaces using React, Typescript, Tailwind and Next.js.",
      "Created a Spline 3D model for the website, enhancing user experience.",
      "Worked with Figma to create responsive designs and prototypes.",
      "Currently working with RESTful APIs to integrate backend services on-demand.",
      "Currently collaborating closely with UI/UX designers to enhance the website design.",
      "currently working on optimizations for maximum speed and scalability.",
      "Currently working on the SEO optimization of the website.",
      "Currently working on the integration of a payment system.",
    ],
  },
  {
    review:
      "Designed and developed the company's main website according to the business requirements, ensuring a responsive, modern, and minimalist design with a focus on user-friendly experience. Collaborated with the design team to implement modern UI/UX principles using Figma.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "May 2024 - Present",
    responsibilities: [
      "Performed requirements ellicitation with both founders of the project. ",
      "Designed wireframes, user stories, and prototypes using Figma.",
      "Developed the frontend of the home page.",
      "Implemented a responsive and adaptive design using Tailwind CSS.",
      "Implemented 3D models on the website using Spline and Three.js",
      "Implemented a modern and animated design using GSAP and Framer Motion.",
      "Developed the full-stack web application using Next.js, Typescript, Prisma ORM, and PostgreSQL.",
      "Initially developed the authentication system using Auth.js. Currently migrating to Supabase.",
      "Integrated Database and Storage using Supabase.",
      "Implemented a RESTful API for the backend systems for video streaming with Livekit.",
      "Successfully deployed the application on Vercel.",
      "Implemented CI/CD pipelines for automated testing and deployment.",
      "Integrated third-party APIs for payment processing, video streaming and video calls.",
      "The client successfully tested the first livestream workshop with multiple participants.",
      "Currently working on expanding the E-commerce system and integrating a blogging system.",
      "Currently collaborating closely with UI/UX designers to enhance the website design.",
      "Currently optimizing the application for performance and scalability.",
      "Currently working on the SEO optimization of the website.",
      "Currently working on the integration of a CMS for the blog.",
    ],
  },
  {
    review:
      "Designed and developed the company's main website according to the business requirements, ensuring a responsive, modern, and minimalist design with a focus on user-friendly experience. Collaborated with the design team to implement modern UI/UX principles using Figma.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Full Stack Developer ",
    date: "October 2024 - Present",
    responsibilities: [
      "Performed requirements ellicitation with both founders of the project. ",
      "Designed wireframes, user stories, site map, data flows and prototypes using Figma.",
      "Developed the frontend of the landing page.",
      "Implemented a responsive and adaptive design using Tailwind CSS.",
      "Implemented a modern and animated design using GSAP and Framer Motion.",
      "Currently working on the authentication system using Supabase.",
      "Currently working on the integration of a payment system.",
      "Currently developing the E-Learning platform using Next.js, React, Typescript, Prisma ORM, and PostgreSQL.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can't say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that's both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
