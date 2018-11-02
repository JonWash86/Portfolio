const projectView = {};

projectView.initPage = function(){
  console.log('initializing');
  Project.all.forEach(function(project){
    console.log('foo bar');
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

// $('.mininav').hover(function(){
//     $('.sidenav ul').slideDown();
// },   function(){
//   $('.sidenav ul').slideUp();
// }
// );

function checkMininav(){
  if($(window).width() < 640){
    $('material-icons').on('click', $('.sidenav ul').slideDown());
    console.log('hiya!')
  }
  else {
    $('header').removeClass('mininav');
  };
}

$(window).on('load', checkMininav);
$(window).on('resize', checkMininav);

// $('.mininav').mouseleave(function(){
//   $('.sidenav ul').slideUp();
// });
