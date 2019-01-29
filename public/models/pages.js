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

  // Page.handleSidefo = function(){
    $('.tab').on('click', function(event){
      $('.sidefoText').fadeOut();
      $('.sidefo').empty();
      $('.sidefo').animate({
        width:'toggle'
      });
      var navTarget = $(this).attr('id');
      Page.all.forEach(function(page){
        if (navTarget == page.pageTitle){
          $('.sidefo').append(page.toFo());
          $('.sidefoText').animate({
            opacity: 100
          })
        $('.sidefo').animate({
          width:'toggle'
        });

      //     // $('.sidefo').toggle('slide').delay(6000);
      }
    });
  });

  // $(document).ready(function() {
  //   Page.handleSidefo();
  // });


// })(window);
