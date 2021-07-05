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

function formSubmission(){
  event.preventDefault();
  if (!formIsValid()){
    $("#formResponse").text('Please fill out all fields');
  }
  else if ($('#untouched').val() === 'untouched_123' && $('#blankField').val() === '')
  {
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
    $('input[name="name"]').val('');
    $('input[name="email"]').val('');
    $('textarea[name="message"]').val('');
    $("#formResponse").text('Thanks for getting in touch!')
  }
};

function formIsValid(){
  return(
    $('input[name="name"]').val() !== '' &&
    $('input[name="email"]').val() !== '' &&
    $('input[name="message"]').val() !== ''
  );
}
