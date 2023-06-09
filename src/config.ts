// Place site configuration and content here.
//TODO: replace this file by fetching from a database

export const email = "isimon.dev@gmail.com";

export const profileImg = {
  url: "/profileImg.png",
  alt: "Isaiah Simon's profile picture",
};

export const socialMedia = {
  GitHub: "https://github.com/IsaiahSimon",
  Twitter: "https://twitter.com/isimondev",
  LinkedIn: "https://www.linkedin.com/in/isimondev",
};

export const projects = [
  {
    id: 1,
    title: "ParcelPulse",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quos impedit ad quia sequi, fugit dolorem! Quod est repellat iure.",
    demoURL: "repoURL for Project 2",
    repoURL: "https://github.com/IsaiahSimon/parcelpulse",
    imageURL: "/postTrailImg.jpg",
    alt: "ParcelPulse project image",
    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Maven",
      "Hibernate",
      "Vercel",
    ],
    // other project properties...
  },
  {
    id: 2,
    title: "Post Trail",
    description:
      "Frontend client application to provide users with an easy way to track their Post Trail packages and mail.",
    demoURL: "https://posttrail.vercel.app/",
    repoURL: "https://github.com/IsaiahSimon/post-trail",
    imageURL: "/postTrailImg.jpg",
    alt: "PostTrail project image",
    stack: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Vercel",
    ],
    // other project properties...
  },
  {
    id: 3,
    title: "Nikki Diamanté",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quos impedit ad quia sequi, fugit dolorem! Quod est repellat iure.",
    demoURL: "https://nikkidiamante.com/",
    repoURL: "https://github.com/IsaiahSimon/nikki-diamante-2.0",
    imageURL: "/postTrailImg.jpg",
    alt: "Nikki Diamanté project image",
    stack: [
      "TypeScript",
      "Next.js",
      "React.js",
      "TailwindCSS",
      "HTML",
      "Netlify",
    ],
    // other project properties...
  },
  // more projects...
];

export const blogPosts = [
  {
    id: 1,
    title: "Blog Post 1",
    content: "Content for Blog Post 1",
    date: "2023-05-01",
    // other blog post properties...
  },
  {
    id: 2,
    title: "Blog Post 2",
    content: "Content for Blog Post 2",
    date: "2023-05-02",
    // other blog post properties...
  },
  {
    id: 3,
    title: "Blog Post 3",
    content: "Content for Blog Post 3",
    date: "2023-05-03",
    // other blog post properties...
  },
  {
    id: 4,
    title: "Blog Post 4",
    content: "Content for Blog Post 4",
    date: "2023-05-04",
    // other blog post properties...
  },
  {
    id: 5,
    title: "Blog Post 5",
    content: "Content for Blog Post 5",
    date: "2023-05-05",
    // other blog post properties...
  },
  // more blog posts...
];

export const testimonials = [
  {
    id: 1,
    clientName: "Client 1",
    testimonial: "Testimonial from Client 1",
    // other testimonial properties...
  },
  {
    id: 2,
    clientName: "Client 2",
    testimonial: "Testimonial from Client 2",
    // other testimonial properties...
  },
  {
    id: 3,
    clientName: "Client 3",
    testimonial: "Testimonial from Client 3",
    // other testimonial properties...
  },
  // more testimonials...
];

export const pricingPackage = [
  {
    id: 1,
    packageName: "Basic",
    price: 1000,
    features: ["Single page", "Static"],
    // other pricingPackage properties...
  },
  {
    id: 2,
    packageName: "Basic",
    price: 2500,
    features: ["Up to 5 pages", "Static", "CMS"],
    // other pricingPackage properties...
  },
  // more pricingPackages...
];

export const credits = [
  {
    id: 1,
    label: "Ashish",
    websiteURL: "https://asrvd.me/",
    repoURL: "https://github.com/asrvd/asrvd.me",
    blogURL:
      "https://dev.to/asheeshh/i-made-a-full-stack-portfolio-site-using-nextjs-and-tailwind-366d",
  },
  {
    id: 2,
    label: "Brittany Chiang",
    websiteURL: "https://brittanychiang.com/",
    repoURL: "https://github.com/bchiang7/v4",
  },
  {
    id: 3,
    label: "Lee Robinson",
    websiteURL: "https://leerob.io/",
  },
  {
    id: 4,
    label: "OpenSauced",
    websiteURL: "https://opensauced.pizza/",
  },
];
