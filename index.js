let menuSection = document.querySelector('#mobile-menu')
let menu = menuSection.querySelector(".icon-wrapper");
menu.addEventListener('click', () => {
    menuSection.classList.toggle("d-none");
});

let hamburgerIcon = document.querySelector("nav.toggle-wrapper .icon-wrapper");

hamburgerIcon.addEventListener('click', () => {
    menuSection.classList.toggle("d-none");
});

document.querySelectorAll(".menu-list li a").forEach(elem => {
    elem.addEventListener("click", () => {
        menuSection.classList.toggle("d-none");
    });
});

let recentWorks = document.getElementById("recent-works");
let aboutMe = document.getElementById("about");
let contact = document.getElementById("contact");

let links = Array.from(document.querySelectorAll("ul.desktop-only > li > a"));
let recentWorksSection = links[0];
let aboutMeSection = links[1];
let contactSection = links[2];



window.onscroll = () => {
    if(recentWorks.getBoundingClientRect().top <= 50 && recentWorks.getBoundingClientRect().top >= -1000){
        recentWorksSection.classList.add("active-section");
    }else {
        recentWorksSection.classList.remove("active-section");
    }

    if(aboutMe.getBoundingClientRect().top <= 50 && aboutMe.getBoundingClientRect().top >= -325){
        aboutMeSection.classList.add("active-section");
    }else {
        aboutMeSection.classList.remove("active-section");
    }
    
    if(contact.getBoundingClientRect().top <= 350){
        contactSection.classList.add("active-section");
    }else {
        contactSection.classList.remove("active-section");
    }
};

const projects = [
    {
        title: "Multi-Post Stories <span class=\"newline\"></span> Gain+Glory",
        technologies: ['Ruby on Rails', "CSS", "JavaScript", "HTML"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        demoLink: "http://example.com",
        sourceLink: "http://example.com",
        imageLink: "/image.jpg",
    },
    {
        title: "Multi-Post Stories <span class=\"newline\"></span> Gain+Glory",
        technologies: ['Ruby on Rails', "CSS", "JavaScript", "HTML"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        demoLink: "http://example.com",
        sourceLink: "http://example.com",
        imageLink: "/image.jpg",
    },
    {
        title: "Multi-Post Stories <span class=\"newline\"></span> Gain+Glory",
        technologies: ['Ruby on Rails', "CSS", "JavaScript", "HTML"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        demoLink: "http://example.com",
        sourceLink: "http://example.com",
        imageLink: "/image.jpg",
    },
    {
        title: "Multi-Post Stories <span class=\"newline\"></span> Gain+Glory",
        technologies: ['Ruby on Rails', "CSS", "JavaScript", "HTML"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        demoLink: "http://example.com",
        sourceLink: "http://example.com",
        imageLink: "/image.jpg",
    },
    {
        title: "Multi-Post Stories <span class=\"newline\"></span> Gain+Glory",
        technologies: ['Ruby on Rails', "CSS", "JavaScript", "HTML"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        demoLink: "http://example.com",
        sourceLink: "http://example.com",
        imageLink: "/image.jpg",
    },
    {
        title: "Multi-Post Stories <span class=\"newline\"></span> Gain+Glory",
        technologies: ['Ruby on Rails', "CSS", "JavaScript", "HTML"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        demoLink: "http://example.com",
        sourceLink: "http://example.com",
        imageLink: "/image.jpg",
    }
];

let projectsWrapper = recentWorks.querySelector('.projects');

projects.forEach((project, idx) =>  {
    let projectCard = document.createElement("div");
    projectCard.classList.add('project-card');
    
    let projectInfo = document.createElement("div");
    projectInfo.classList.add('project-info');
    
    let projectTitle = document.createElement("div");
    projectTitle.classList.add('project-title');
    projectTitle.innerHTML = project.title;

    let projectStacks = document.createElement("div");
    project.technologies.forEach((tech) => {
        let badge = document.createElement("div");
        badge.innerText = tech;
        projectStacks.appendChild(badge);
    });
    projectStacks.classList.add('project-stacks');

    let buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add('button-wrapper');
    let seeProjectButton = document.createElement("a");
    seeProjectButton.dataset.id = idx;
    seeProjectButton.classList.add("button");
    seeProjectButton.innerText = "See Project";
    buttonWrapper.appendChild(seeProjectButton);

    projectInfo.append(projectTitle, projectStacks, buttonWrapper);
    projectCard.appendChild(projectInfo);
    projectsWrapper.appendChild(projectCard);
})