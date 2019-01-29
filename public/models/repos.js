(function(module){
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback){
    $.getJSON('https:api.github.com/users/jonwash86/repos').then(data => {
        const repositories = data.map(repo => repos.all.push(repo));
      }).then(callback);
  }
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;

})(window);
