const projectView = {};

projectView.initPage = function(){
  Project.all.forEach(function(project){
    $('#projectZone').append(project.toHtml());
  });

  $('.untouchedField').hide();

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

function formSubmission(){
  event.preventDefault();
  if ($('#untouched').val() === 'untouched_123' && $('#blankField').val() === '')
  {
    console.log('our form is valid!');
    $.ajax({
      type:'POST',
      url:'/formSend',
      data:
      {
        name: $('input[name="name"]').val(),
        email: $('input[name="email"]').val(),
        message: $('textarea[name="message"]').val()
      }
    })
  }
};
