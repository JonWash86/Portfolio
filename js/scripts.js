// function buildProjects(){
//   for (var i = 0; i < projects.length; i++) {
//     var projectZone = document.getElementById('project-zone');
//     var projectDiv = document.createElement('div');
//     projectDiv.setAttribute('class', 'project-display');
//     var h2 = document.createElement('h2')
//     projectDiv.addEventListener('click', projectPop);
//     var projectImage = document.createElement('img');
//     projectImage.setAttribute('src', 'images/' + projects[i].thumbnail);
//     console.log(projects[i].thumbnail);
//     var projectTitle = document.createElement('h2');
//     projectTitle.innerText= projects[i].title;
//     projectDiv.appendChild(projectImage);
//     projectDiv.appendChild(projectTitle);
//     projectZone.appendChild(projectDiv);
//   };
// };


function projectPop(){
  for(var u = 0; u < projects.length; u++) {
    var popup = document.getElementById('popup');
    var popupInner = document.createElement('div');
    var exitPopup = document.createElement('a');
    exitPopup.setAttribute('class', 'exit-popup');
    exitPopup.innerText = 'X';
    exitPopup.setAttribute('onclick', 'location.relaod()');
  }
};
