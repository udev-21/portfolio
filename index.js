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
        fullTitle: "Keeping track of hundreds of components",
        technologies: ['Ruby on Rails', "CSS", "JavaScript", "HTML"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        demoLink: "http://example.com",
        sourceLink: "http://example.com",
        imageLink: "assets/images/project-details-image.jpg",
    },
    {
        title: "Multi-Post Stories <span class=\"newline\"></span> Gain+Glory",
        fullTitle: "Multi-Post Stories Gain+Glory",
        technologies: ['Ruby on Rails', "CSS", "JavaScript", "HTML"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        demoLink: "http://example.com",
        sourceLink: "http://example.com",
        imageLink: "assets/images/project-details-image.jpg",
    },
    {
        title: "Multi-Post Stories <span class=\"newline\"></span> Gain+Glory",
        fullTitle: "Multi-Post Stories Gain+Glory",
        technologies: ['Ruby on Rails', "CSS", "JavaScript", "HTML"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        demoLink: "http://example.com",
        sourceLink: "http://example.com",
        imageLink: "assets/images/project-details-image.jpg",
    },
    {
        title: "Multi-Post Stories <span class=\"newline\"></span> Gain+Glory",
        fullTitle: "Multi-Post Stories Gain+Glory",
        technologies: ['Ruby on Rails', "CSS", "JavaScript", "HTML"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        demoLink: "http://example.com",
        sourceLink: "http://example.com",
        imageLink: "assets/images/project-details-image.jpg",
    },
    {
        title: "Multi-Post Stories <span class=\"newline\"></span> Gain+Glory",
        fullTitle: "Multi-Post Stories Gain+Glory",
        technologies: ['Ruby on Rails', "CSS", "JavaScript", "HTML"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        demoLink: "http://example.com",
        sourceLink: "http://example.com",
        imageLink: "assets/images/project-details-image.jpg",
    },
    {
        title: "Multi-Post Stories <span class=\"newline\"></span> Gain+Glory",
        fullTitle: "Multi-Post Stories Gain+Glory",
        technologies: ['Ruby on Rails', "CSS", "JavaScript", "HTML"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        demoLink: "http://example.com",
        sourceLink: "http://example.com",
        imageLink: "assets/images/project-details-image.jpg",
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

    seeProjectButton.addEventListener('click', (event) => {
        document.body.classList.toggle("overflow-hidden");
        let popup = document.createElement("section");
        popup.id = "popup";
        let popupProjectDetailWrapper = document.createElement("div");
        popupProjectDetailWrapper.classList.add("project-details-popup");

        let closePopup = new Image();
        closePopup.src = "assets/icons/close-popup.svg";
        closePopup.classList.add('close-popup');
        closePopup.alt = "close popup";
        closePopup.addEventListener('click', () => {
            popup.remove();
            document.body.classList.toggle('overflow-hidden');
        });

        popupProjectDetailWrapper.appendChild(closePopup);

        let projectImage = new Image();
        projectImage.src = project.imageLink;
        projectImage.alt = "project details image";
        
        popupProjectDetailWrapper.appendChild(projectImage);

        let buttonsWrapper = document.createElement('div');
        buttonsWrapper.classList.add('buttons-wrapper');

        let seeLiveButton = document.createElement("a");
        seeLiveButton.href = project.demoLink;
        seeLiveButton.innerHTML = `See Live <img src="assets/icons/see-live.svg" alt="See Live">`;
        seeLiveButton.classList.add('button');


        let seeSourceButton = document.createElement("a");
        seeSourceButton.href = project.sourceLink;
        seeSourceButton.innerHTML = `See Source <img src="assets/icons/see-source.svg" alt="See Source">`;
        seeSourceButton.classList.add('button');
        
        buttonsWrapper.append(seeLiveButton, seeSourceButton);

        let titleWrapper = document.createElement("div");
        titleWrapper.classList.add("title-wrapper");

        let title = document.createElement("div");
        title.classList.add('title');
        title.innerHTML = project.fullTitle;

        let desktopButtonWrapper = buttonsWrapper.cloneNode(true)
        desktopButtonWrapper.classList.add('d-none');
        titleWrapper.append(title, desktopButtonWrapper);

        popupProjectDetailWrapper.appendChild(titleWrapper);

        popupProjectDetailWrapper.appendChild(projectStacks.cloneNode(true));

        let projectDescription = document.createElement("p");
        
        projectDescription.classList.add('description');

        projectDescription.innerText = project.description;

        popupProjectDetailWrapper.appendChild(projectDescription);

        


        popupProjectDetailWrapper.appendChild(buttonsWrapper);
        popup.appendChild(popupProjectDetailWrapper);
        document.body.appendChild(popup);
    })

    buttonWrapper.appendChild(seeProjectButton);

    projectInfo.append(projectTitle, projectStacks, buttonWrapper);
    projectCard.appendChild(projectInfo);
    projectsWrapper.appendChild(projectCard);
})

const myForm = document.forms[0];
myForm.addEventListener("submit", (event) => {
    let emailInput = myForm.elements.namedItem("email");
    if(emailInput.value !== emailInput.value.toLowerCase()){
        emailInput.setCustomValidity("Expected only lower-case email address.");
        event.preventDefault();
    }
});