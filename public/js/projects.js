
function Project(rawDataObj){
  this.title = rawDataObj.title;
  this.thumbnail = rawDataObj.thumbnail;
  this.dateComplete = rawDataObj.dateComplete;
  this.description = rawDataObj.description;
};

Project.all = [];

Project.prototype.toHtml = function(){
  var templateFiller = Handlebars.compile($('#template').html());
  var filledTemplate = templateFiller(this);
  return filledTemplate;
};

Project.prototype.toPop = function(){
  var popTemplateFiller = Handlebars.compile($('#popTemplate').html());
  var popFilled = popTemplateFiller(this);
  return popFilled;
}

Project.handleNavTabs = function(){
  $('.tab').on('click', function(event){
    $('.tab').removeClass('selected');
    $(this).addClass('selected');
  });
};

Project.loadAll = function(rawData) {
  rawData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  })
  projectView.initPage();
}

Project.fetchAll = function() {
  if (localStorage.rawData){
    Project.loadAll(JSON.parse(localStorage.rawData));
    projectView.initPage();
  }
  else {
    $.get('data/projects.json', Project.loadAll);
  }
}

$(document).ready(function() {
  Project.handleNavTabs();
});
