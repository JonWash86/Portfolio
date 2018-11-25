// (function(module){
  function Page(pageTitle, pageDescription){
    this.pageTitle = pageTitle;
    this.pageDescription = pageDescription;
  };

  Page.all = [];

  Page.all.push(new Page(
    'Projects', 'This is a page describing all of my projects. Clikc on one to find out more informations.'
  ));
  Page.all.push(new Page(
    'About', 'This is the About page. So I guess you\'re reading about the about page right now.'
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
      $('.sidefo').empty();
      var navTarget = $(this).attr('id');
      Page.all.forEach(function(page){
        // console.log(this.pageTitle);
        console.log(page);
        if (navTarget == page.pageTitle){
          $('.sidefo').append(page.toFo());
        };
      });
    });
  // };

  // $(document).ready(function() {
  //   Page.handleSidefo();
  // });


// })(window);
