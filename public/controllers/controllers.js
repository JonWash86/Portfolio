'use strict';

(function(module) {
  const homeController = {};
  homeController.show = () => {
    $("main > section").show();
  };
  module.homeController = homeController;

  const projectController = {};
  projectController.show = () => {
    $("#projectZone").show().siblings().hide();
  };
  module.projectController = projectController;

  const aboutController = {};
  aboutController.show = () => {
    $("#about").show().siblings().hide();
    repos.requestRepos(repoView.index);
  }
  module.aboutController = aboutController;

  const contactController = {};
  contactController.show = () => {
    $("#contact").show().siblings().hide();
  }
  module.contactController = contactController;

})(window);
