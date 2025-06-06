const siteData = {
  title: "Shiva's Dynamic Site",
  about: {
    heading: "About Me",
    text: "I am building dynamic websites using HTML, CSS, and JavaScript."
  },
  projects: [
    {
      name: "Puzzle Block Game",
      description: "A game where players match falling shapes with correct blocks.",
      link: "https://example.com/game"
    },
    {
      name: "Catch the Apples!",
      description: "A Firebase-integrated game showing live leaderboard.",
      link: "https://example.com/catch"
    }
  ],
  contact: {
    email: "you@example.com",
    text: "Feel free to reach out anytime!"
  }
};

// Set titles
document.getElementById("siteTitle").textContent = siteData.title;
document.getElementById("footerTitle").textContent = siteData.title;
document.getElementById("year").textContent = new Date().getFullYear();

// Fill About
const aboutSection = document.getElementById("about");
aboutSection.innerHTML = `
  <h2>${siteData.about.heading}</h2>
  <p>${siteData.about.text}</p>
`;

// Fill Projects
const projectsSection = document.getElementById("projects");
projectsSection.innerHTML = `<h2>Projects</h2>`;
siteData.projects.forEach(project => {
  projectsSection.innerHTML += `
    <div>
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <a class="button" href="${project.link}" target="_blank">View Project</a>
    </div>
  `;
});

// Fill Contact
const contactSection = document.getElementById("contact");
contactSection.innerHTML = `
  <h2>Contact</h2>
  <p>${siteData.contact.text}</p>
  <p>Email: <a href="mailto:${siteData.contact.email}">${siteData.contact.email}</a></p>
`;
