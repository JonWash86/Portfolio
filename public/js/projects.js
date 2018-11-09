
function Project(rawDataObj){
  this.title = rawDataObj.title;
  this.thumbnail = rawDataObj.thumbnail;
  this.dateComplete = rawDataObj.dateComplete;
};

Project.all = [];

Project.prototype.toHtml = function(){
  var template = $('#template').html();
  console.log(template);
  var templateFiller = Handlebars.compile($('#template').html());
  var filledTemplate = templateFiller(this);
  return filledTemplate;
  console.log(filledTemplate);
};

Project.handleMainNav = function(){
  $('.tab').on('click', function(event){
    var target = $(this).data('content');
    $('.tab-content').hide();
    $('.tab').removeClass('selected');
    $("#" + target).show();
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
    console.log('bar');
  }
}

$(document).ready(function() {
  Project.handleMainNav();
});
