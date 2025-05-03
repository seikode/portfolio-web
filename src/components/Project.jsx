import ProjectCard from "./ProjectCard";

const projects = [
  {
    imgSrc: "/images/project-1.png",
    title: "Messanger app UI",
    tags: ["Web-design", "HTML", "CSS"],
    projectLink: "https://seikode.github.io/messenger-clone/",
  },
  {
    imgSrc: "/images/project-2.png",
    title: "Chrome to-do app",
    tags: ["Javascript", "API"],
    projectLink: "https://seikode.github.io/momentum-clone/",
  },
  {
    imgSrc: "/images/project-3.png",
    title: "Recipe app",
    tags: ["Development", "API"],
    projectLink: "",
  },
  {
    imgSrc: "/images/project-4.png",
    title: "Real state website",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee-org/wealthome",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
  },
];
const Project = () => {
  return (
    <section id="project" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {projects.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
