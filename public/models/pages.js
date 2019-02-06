// (function(module){
  function Page(pageTitle, pageDescription){
    this.pageTitle = pageTitle;
    this.pageDescription = pageDescription;
  };

  Page.all = [];

  Page.all.push(new Page(
    'Projects', 'This is a page describing all of my projects. Click on one to find out more informations.'
  ));
  Page.all.push(new Page(
    'About', 'This is the About page. Take a moment to bask in the recursion of reading about the about page.'
  ));
  Page.all.push(new Page(
    'Contact', 'This is how you can get in touch with me and say how much you love all my projects.'
  ));

  Page.prototype.toFo = function(){
    var foTemplateFiller = Handlebars.compile($('#sidefoTemplate').html());
    var foFilled = foTemplateFiller(this);
    return foFilled;
  };

$('.tab').on('click', function(event){
  var navTarget = $(this).attr('id');
  $('.sidefo').animate({
    right: '-200px'
  });
  $('.sidefoText').fadeOut(300);
  $('h1','.sidefo').fadeOut(400);
  setTimeout(function(){sidefoFill(navTarget)}, 800);
  $('.sidefo').delay(600).animate({
    right: '0px'
  })
});

function sidefoFill(navTarget){
  $('.sidefo').empty();
  Page.all.forEach(function(page){
    if (navTarget == page.pageTitle){
      $('.sidefo').append(page.toFo());
        $('.sidefoText').animate({
          opacity: 100
        }, 1800)
    }
  });
}
