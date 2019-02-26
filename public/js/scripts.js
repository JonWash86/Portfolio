const projectView = {};

projectView.initPage = function(){
  Project.all.forEach(function(project){
    $('#projectZone').append(project.toHtml());
  })

  $('.material-icons').on ('click', function(){
      $('.sidenav ul').slideToggle();
  });

  $('.project').on('click', function(){
    $('#project-pop').css({"display" : "block"});
    $('#project-pop').empty();
    var popTarget = $(this).attr('id');
    Project.all.forEach(function(project){
      if (popTarget == project.id){
        $('#project-pop').append(project.toPop());
      };
    });
    $('#pop-close').on('click', function(){
      $('#project-pop').css({"display" : "none"});
    });
  });
};

function successfulForm(){
  $("#successMessage").text('Thanks for getting in touch!')
}


$('#submitButton').on('click', function(){
  grecaptcha.render();

})


// $('#contact').submit(function () {
//   event.preventDefault();
//   $.ajax(
//     type:'POST',
//     url:'/formSend'
//   )
// });
