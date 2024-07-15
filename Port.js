document.addEventListener('DOMContentLoaded', function() {
    const projectsData = [
        { 
          //  title: 'Plain Shooter', 
         //   description: 'This is a simple shooter game, in which you have to escape from the alien spaceship. In the game you will face different challenges in different levels and increase your score by upgrading weapons. Unity engine and C# language have been used to create this game.',
         //   image: 'ProjectImages/Plain2.PNG'
        },
    ];

    function createProjectElement(project) {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        const titleElement = document.createElement('h3');
        titleElement.textContent = project.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = project.description;

        const imageElement = document.createElement('img');
        imageElement.src = project.image;
        imageElement.alt = project.title;

        projectElement.appendChild(imageElement);
        projectElement.appendChild(titleElement);
        projectElement.appendChild(descriptionElement);

        // Add event listener to toggle 'expanded' class and adjust description height
        projectElement.addEventListener('click', function() {
            this.classList.toggle('expanded');

            // Toggle max-height to show/hide description with smooth animation
            if (descriptionElement.style.maxHeight) {
                descriptionElement.style.maxHeight = null;
            } 
            else {
                descriptionElement.style.maxHeight = descriptionElement.scrollHeight + 'px';
            }
        });

        return projectElement;
    }


    addProjectsToDOM();
});
