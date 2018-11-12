const projectView = {};

projectView.initPage = function(){
  Project.all.forEach(function(project){
    $('#projectZone').append(project.toHtml());
  })

  $('.material-icons').on ('click', function(){
      $('.sidenav ul').slideToggle();
  });

  $('.project').on('click', function(){
    Project.toPop();
    $('#project-pop').css({"display" : "block"});
  });

  $('#pop-close').on('click', function(){
    $('#project-pop').css({"display" : "none"});
  });
};
