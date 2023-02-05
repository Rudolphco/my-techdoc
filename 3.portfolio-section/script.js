const projects = [
  {
    description: "Harum natus pariatur repellendus quam tempore modi",
    img: "./images/img-1.png",
    tag: "design",
  },
  {
    description: "Harum natus pariatur repellendus quam tempore modi",
    img: "./images/img-2.png",
    tag: "design",
  },
  {
    description: "Harum natus pariatur repellendus quam tempore modi",
    img: "./images/img-3.png",
    tag: "design",
  },
  {
    description: "Harum natus pariatur repellendus quam tempore modi",
    img: "./images/img-4.png",
    tag: "fullstack",
  },
  {
    description: "Harum natus pariatur repellendus quam tempore modi",
    img: "./images/img-5.png",
    tag: "fullstack",
  },
  {
    description: "Harum natus pariatur repellendus quam tempore modi",
    img: "./images/img-6.png",
    tag: "fullstack",
  },
  {
    description: "Harum natus pariatur repellendus quam tempore modi",
    img: "./images/img-7.png",
    tag: "fullstack",
  },
  {
    description: "Harum natus pariatur repellendus quam tempore modi",
    img: "./images/img-8.png",
    tag: "fullstack",
  },
  {
    description: "Harum natus pariatur repellendus quam tempore modi",
    img: "./images/img-9.png",
    tag: "vanilla",
  },
  {
    description: "Harum natus pariatur repellendus quam tempore modi",
    img: "./images/img-10.png",
    tag: "fullstack",
  },
  {
    description: "Harum natus pariatur repellendus quam tempore modi",
    img: "./images/img-11.png",
    tag: "fullstack",
  },
  {
    description: "Harum natus pariatur repellendus quam tempore modi",
    img: "./images/img-12.png",
    tag: "vanilla",
  },
];

const projectsContainer = document.querySelector(".projects-container");
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.id === "all") {
      renderProjects(projects);
    } else {
      const filteredProjects = projects.filter(
        (item) => item.tag === e.target.id
      );

      renderProjects(filteredProjects);
    }
  });
});

const renderProjects = (projects) => {
  projectsContainer.textContent = "";
  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    projectDiv.innerHTML = `
      <img src=${project.img} alt="project" />
    
              <div class="project-info">
                <p>${project.description}</p>
                <div class="project-btns">
                  <button class="code">Code</button>
                  <button class="live">Live</button>
                </div>
              </div>`;

    projectsContainer.append(projectDiv);
  });
};

renderProjects(projects);
