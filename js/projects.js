var projects = [];

function project(title, thumbnail,){
  this.title = title;
  this.thumbnail = thumbnail;

};

project.prototype.toHtml = function(){
  var $newProject = $('article.template').clone();
  
};

projects.push(new project('Cookie Stand', 'cookie_stand.jpg'));
