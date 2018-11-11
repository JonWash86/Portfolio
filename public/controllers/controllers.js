'use strict';

(function(module) {
  const projectController = {};
  projectController.show = () => {
    $("main > section").hide();
    $("#projectZone").show();
  };
  module.projectController = projectController;

  const aboutController = {};
  aboutController.show = () => {
    $("main > section").hide();
    $("#about").show();
  }
  module.aboutController = aboutController;

  const contactController = {};
  contactController.show = () => {
    $("main > section").hide();
    $("#contact").show();
  }
  module.contactController = contactController;

})(window);
