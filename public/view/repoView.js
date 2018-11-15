'use strict';

(function(module){
  const repoView = {};

  const ui = function(){
    let $aboutZone = $('#aboutZone');
    $aboutZone.find('ul').empty();
    $aboutZone.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  repoView.index = function(){
    ui();
    $('#aboutZone ul').append(
      repos.with('name').map(render)
    );
  }
  module.repoView = repoView;
})(window);
