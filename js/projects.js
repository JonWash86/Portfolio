var projects = [];

function project(title, thumbnail, dateComplete){
  this.title = title;
  this.thumbnail = thumbnail;
  this.dateComplete = dateComplete;
};

project.prototype.toHtml = function(){
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  $newProject.find('h3').text(this.title);
  $newProject.find('h4').text(this.dateComplete);
  $newProject.find('.thumbnail').attr('src', 'images/' + this.thumbnail)
  $newProject.append('<hr>');
  return $newProject;
  console.log(`I have just built the ${this} project object.`)

};

projects.handleMainNav = function(){
  $('.tab').on('click', function(event){
    var target = $(this).data('content');
    $('.tab-content').hide();
    $("#" + target).show();
  });
};

projects.push(new project('Cookie Stand', 'cookie_stand.jpg', 'Summer 2018'));
projects.push(new project('BusMall', 'busMall.jpg', 'Summer 2018'));
projects.push(new project('AlCodeholics Anonymous', 'alcodeholics.jpg', 'Summer 2018'));

projects.forEach(function(project){
  $('#projectZone').append(project.toHtml());
})

$(document).ready(function() {
  projects.handleMainNav();
});
