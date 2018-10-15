var projects = [];

function project(title, thumbnail,){
  this.title = title;
  this.thumbnail = thumbnail;

};



project.prototype.toHtml = function(){
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  $newProject.find('h1').text(this.title);
  $newProject.append('<hr>');
  return $newProject;
};

projects.push(new project('Cookie Stand', 'cookie_stand.jpg'));

projects.forEach(function(project){
  $('.main-content').append(project.toHtml());
})
