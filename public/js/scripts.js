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


var onloadCallback = function() {
  grecaptcha.render('google_recaptcha', {
    'sitekey' : '6Lc945MUAAAAADWyZiqI7gh0rAsK61l56Oq_9djV'
  });
};

$('#submitButton').on('click', function(){
  console.log('we\'re working on it!')
  grecaptcha.render();
  response = grecaptcha.getResponse();
  alert(response);
  console.log(response);
  if (response.length === 0) {
    alert('it didn\'t work!');
  }
  else {
    alert( 'it worked!' );
  }
})


function formSubmission(){
  event.preventDefault();
  $.ajax({
    type:'POST',
    url:'/formSend'
  })
};
