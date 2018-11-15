'use strict';

(function(module){
  const repoView = {};

  const ui = function(){
    let $about = $('#aboutZone');
    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  repoView.index = function(){
    ui();
    $('#about ul').append(
      repos.with('name').map(render)
    );
  }
})
