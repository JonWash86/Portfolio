const projectView = {};

projectView.initPage = function(){
  Project.all.forEach(function(project){
    $('#projectZone').append(project.toHtml());
  })
};

function projectPop(){
  for(var u = 0; u < projects.length; u++) {
    var popup = document.getElementById('popup');
    var popupInner = document.createElement('div');
    var exitPopup = document.createElement('a');
    exitPopup.setAttribute('class', 'exit-popup');
    exitPopup.innerText = 'X';
    exitPopup.setAttribute('onclick', 'location.reload()');
  }
};

$('.material-icons').on ('click', function(){
    $('.sidenav ul').slideToggle();
});


//this will toggle the "show" class on my popUp.
$('project').on ('click', function(){
  $('.popUp').classList.toggle("show");
});
