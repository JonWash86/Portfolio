
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

Project.push(new project('Cookie Stand', 'cookie_stand.jpg', 'Summer 2018'));
Project.push(new project('BusMall', 'busMall.jpg', 'Summer 2018'));
Project.push(new project('AlCodeholics Anonymous', 'alcodeholics.jpg', 'Summer 2018'));

Project.forEach(function(project){
  $('#projectZone').append(project.toHtml());
})

$(document).ready(function() {
  Project.handleMainNav();
});
