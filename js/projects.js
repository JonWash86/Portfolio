var projects = [];

function project(title, thumbnail, dateComplete){
  this.title = title;
  this.thumbnail = thumbnail;
  this.dateComplete = dateComplete;
};

project.prototype.toHtml = function(){
  var template = $('#template').html();
  console.log(template);
  var templateFiller = Handlebars.compile($('#template').html());
  var filledTemplate = templateFiller(this);
  return filledTemplate;
};

projects.handleMainNav = function(){
  $('.tab').on('click', function(event){
    var target = $(this).data('content');
    $('.tab-content').hide();
    $('.tab').removeClass('selected');
    $("#" + target).show();
    $(this).addClass('selected');
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
